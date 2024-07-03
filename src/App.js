import React, { useState } from 'react';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      completed: false,
      editing: false,
      created: new Date(),
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompleted = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskEditing = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, editing: !task.editing } : { ...task, editing: false }
    ));
  };

  const updateTask = (id, description) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, description, editing: false } : task
    ));
  };

  const clearCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
  });

  const unfinishedTasksCount = tasks.filter((task) => !task.completed).length;

  return (
    <section className="todoapp">
      <NewTaskForm addTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        toggleTaskEditing={toggleTaskEditing}
        updateTask={updateTask}
      />
      <Footer
        tasksCount={unfinishedTasksCount}
        currentFilter={filter}
        setFilter={setFilter}
        clearCompletedTasks={clearCompletedTasks}
      />
    </section>
  );
}

export default App;
