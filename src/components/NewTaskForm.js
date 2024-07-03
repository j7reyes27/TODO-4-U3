import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ addTask }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      addTask(description);
      setDescription('');
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </form>
    </header>
  );
};

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired
};

NewTaskForm.defaultProps = {
  addTask: () => {}
};

export default NewTaskForm;
