import React, { useContext } from 'react';
import { StoreContext } from '../reducers/Store';

export const TodoList = () => {
  const [state, dispatch] = useContext(StoreContext);
  console.log(state);
  return (
    <div className="todo-list">
      <button onClick={() => dispatch({type: 'DELETE'})}>
        Clear Completed
      </button>
      <button onClick={() => dispatch({type: 'ADD', payload: 'Sleep'})}>
        Sleep
      </button>

      <h2>The List</h2>
      <ul>
        {state.map(item => <li>{item.text}</li>)}
      </ul>

    </div>
  )
}

export default TodoList;