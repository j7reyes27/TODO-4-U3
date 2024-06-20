import React, { useState } from 'react';

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
          <span className="created">created {created.toLocaleString()}</span>
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

export default Task;
