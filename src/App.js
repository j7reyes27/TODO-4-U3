import React, { useState } from 'react';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      completed: false,
      editing: false,
      created: new Date()
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompleted = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskEditing = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, editing: !task.editing } : { ...task, editing: false }
    ));
  };

  const updateTask = (id, description) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, description, editing: false } : task
    ));
  };

  return (
    <section className="todoapp">
      <NewTaskForm addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        toggleTaskCompleted={toggleTaskCompleted} 
        deleteTask={deleteTask} 
        toggleTaskEditing={toggleTaskEditing}
        updateTask={updateTask}
      />
      <Footer tasksCount={tasks.length} />
    </section>
  );
}

export default App;
