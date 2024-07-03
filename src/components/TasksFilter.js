import React from 'react';
import PropTypes from 'prop-types';

const TasksFilter = ({ currentFilter, setFilter }) => {
  return (
    <ul className="filters">
      <li>
        <button
          className={currentFilter === 'All' ? 'selected' : ''}
          onClick={() => setFilter('All')}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={currentFilter === 'Active' ? 'selected' : ''}
          onClick={() => setFilter('Active')}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={currentFilter === 'Completed' ? 'selected' : ''}
          onClick={() => setFilter('Completed')}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

TasksFilter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default TasksFilter;
