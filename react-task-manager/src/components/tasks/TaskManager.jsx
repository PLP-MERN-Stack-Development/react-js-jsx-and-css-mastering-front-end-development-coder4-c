import React, { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const stats = {
    total: tasks.length,
    active: tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">My Tasks</h2>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.total}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Total</p>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-20 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{stats.active}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Active</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900 dark:bg-opacity-20 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.completed}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask(e)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
        />
        <Button onClick={addTask} variant="primary">Add</Button>
      </div>

      <div className="flex gap-2 mb-6">
        <Button 
          variant={filter === 'all' ? 'primary' : 'outline'}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button 
          variant={filter === 'active' ? 'primary' : 'outline'}
          onClick={() => setFilter('active')}
        >
          Active
        </Button>
        <Button 
          variant={filter === 'completed' ? 'primary' : 'outline'}
          onClick={() => setFilter('completed')}
        >
          Completed
        </Button>
      </div>

      <div className="space-y-2">
        {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 py-8">
            {filter === 'all' ? 'No tasks yet. Add one above!' : `No ${filter} tasks`}
          </p>
        ) : (
          filteredTasks.map(task => (
            <div 
              key={task.id}
              className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className={`flex-1 text-gray-800 dark:text-white ${task.completed ? 'line-through opacity-50' : ''}`}>
                {task.text}
              </span>
              <Button 
                variant="danger" 
                onClick={() => deleteTask(task.id)}
                className="px-3 py-1 text-sm"
              >
                Delete
              </Button>
            </div>
          ))
        )}
      </div>
    </Card>
  );
};