import React from 'react';

export const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200 ${className}`}>
      {children}
    </div>
  );
};