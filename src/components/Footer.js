import React from 'react';
import TasksFilter from './TasksFilter';

const Footer = ({ tasksCount, setFilter, clearCompletedTasks }) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>{tasksCount} items left</span>
      <TasksFilter setFilter={setFilter} />
      <button className='clear-completed' onClick={clearCompletedTasks}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
