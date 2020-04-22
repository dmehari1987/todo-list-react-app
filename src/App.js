import React from 'react';
import TodosList from './components/todosList';
import './App.css';

function App() {
  
  return (
    <div className="todo-list">
      <h1>To Do List</h1>
      <TodosList />
    </div>
  );
}

export default App;
