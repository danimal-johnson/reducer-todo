import React, { useReducer } from 'react';
import appReducer from '../reducers/appReducer';

export const TodoList = () => {
  // Use the AppReducer. Or use a context?
  const [state, dispatch] = useReducer(appReducer, initialState);

  const buttonHandler = e => {
    e.preventDefault();
  }

  return (
    <div className="todo-list">
      <h2>The List</h2>
      <ul>
        {state.something.map(item => <li>{item}</li>)}
      </ul>
      <button id="clear-list" onClick={buttonHandler}>Clear list</button>
    </div>
  )
}

export default TodoList;