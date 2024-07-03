import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = ({ tasks, toggleTaskCompleted, deleteTask, toggleTaskEditing, updateTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          toggleTaskCompleted={toggleTaskCompleted}
          deleteTask={deleteTask}
          toggleTaskEditing={toggleTaskEditing}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleTaskCompleted: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleTaskEditing: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired
};

TaskList.defaultProps = {
  tasks: [],
  toggleTaskCompleted: () => {},
  deleteTask: () => {},
  toggleTaskEditing: () => {},
  updateTask: () => {}
};

export default TaskList;
