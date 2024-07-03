import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from './TasksFilter';

const Footer = ({ tasksCount, currentFilter, setFilter, clearCompletedTasks }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{tasksCount} items left</span>
      <TasksFilter currentFilter={currentFilter} setFilter={setFilter} />
      <button className="clear-completed" onClick={clearCompletedTasks}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  tasksCount: PropTypes.number.isRequired,
  currentFilter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  clearCompletedTasks: PropTypes.func.isRequired,
};

export default Footer;
