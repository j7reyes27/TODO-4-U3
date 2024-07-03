import React from 'react';
import PropTypes from 'prop-types';
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

Footer.propTypes = {
  tasksCount: PropTypes.number.isRequired,
  setFilter: PropTypes.func.isRequired,
  clearCompletedTasks: PropTypes.func.isRequired
};

Footer.defaultProps = {
  tasksCount: 0,
  setFilter: () => {},
  clearCompletedTasks: () => {}
};

export default Footer;
