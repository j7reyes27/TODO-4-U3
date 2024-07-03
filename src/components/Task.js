import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

const Task = ({ task, toggleTaskCompleted, deleteTask, toggleTaskEditing, updateTask }) => {
  const { id, description, completed, editing, created } = task;
  const taskClass = completed ? 'completed' : editing ? 'editing' : '';
  const [newDescription, setNewDescription] = useState(description);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      updateTask(id, newDescription);
    }
  };

  return (
    <li className={taskClass}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onChange={() => toggleTaskCompleted(id)} />
        <label>
          <span className="description">{description}</span>
          <span className="created">created {formatDistanceToNow(new Date(created))} ago</span>
        </label>
        <button className="icon icon-edit" onClick={() => toggleTaskEditing(id)}></button>
        <button className="icon icon-destroy" onClick={() => deleteTask(id)}></button>
      </div>
      {editing && <input 
                    type="text" 
                    className="edit" 
                    value={newDescription} 
                    onChange={(e) => setNewDescription(e.target.value)} 
                    onKeyPress={handleKeyPress}
                  />}
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    editing: PropTypes.bool.isRequired,
    created: PropTypes.instanceOf(Date).isRequired
  }).isRequired,
  toggleTaskCompleted: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleTaskEditing: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired
};

Task.defaultProps = {
  task: {
    id: 0,
    description: '',
    completed: false,
    editing: false,
    created: new Date()
  }
};

export default Task;
