import React from 'react';
import { TaskManager } from '../components/tasks/TaskManager';
import { UsersList } from '../components/users/UsersList';

export const Home = () => {
  return (
    <div className="space-y-8">
      <TaskManager />
      <UsersList />
    </div>
  );
};