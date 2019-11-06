import React from 'react';
import './App.css';

import appReducer from './reducers/appReducer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  // Add states here

  return (
    <div className="App">
      <h1>This is your new reducer to-do app! Yay!!</h1>
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
