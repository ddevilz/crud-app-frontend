import React from 'react';
import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <AddTodo />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
