import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 flex flex-col">
        <Navbar />
        <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
          <Home />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;