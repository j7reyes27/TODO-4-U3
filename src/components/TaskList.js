import React from 'react';
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

export default TaskList;
