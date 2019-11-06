import React from 'react';
import './App.css';

import Store from './reducers/Store';
import TodoList from './components/TodoList';

function App() {
  // Add states here

  return (
    <Store>
      <div className="App">
        <h1>Another to-do app! Yay!!</h1>
        <TodoList />
      </div>
    </Store>
  );
}

export default App;
