import React from 'react';

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

export default TasksFilter;
