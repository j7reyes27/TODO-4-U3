import React from 'react';
import PropTypes from 'prop-types';

const TasksFilter = ({ setFilter }) => {
  return (
    <ul className='filters'>
      <li>
        <button className='selected' onClick={() => setFilter('All')}>
          All
        </button>
      </li>
      <li>
        <button onClick={() => setFilter('Active')}>
          Active
        </button>
      </li>
      <li>
        <button onClick={() => setFilter('Completed')}>
          Completed
        </button>
      </li>
    </ul>
  );
};

TasksFilter.propTypes = {
  setFilter: PropTypes.func.isRequired
};

TasksFilter.defaultProps = {
  setFilter: () => {}
};

export default TasksFilter;
