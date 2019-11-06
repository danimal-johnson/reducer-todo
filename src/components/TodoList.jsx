import React, { useContext, useState } from 'react';
import { StoreContext } from '../reducers/Store';

export const TodoList = () => {
  const [state, dispatch] = useContext(StoreContext);
  const [taskName, setTaskName] = useState("");
  console.log(state);

  const handleInputChange = event => {
    console.log(event.target.name, event.target.value);
    setTaskName(event.target.value);
  }
  
  const saveTask = () => {
    dispatch({ type: 'ADD', payload: taskName });
  };

  return (
    <div className="todo-list">

      <input type="text"
        name="task"
        onChange={handleInputChange}
      />
      <button
        type="button"
        onClick={saveTask}>Save Task
      </button>

      <button onClick={() => dispatch({type: 'DELETE'})}>
        Clear Completed
      </button>
      <button onClick={() => dispatch({type: 'ADD', payload: 'Sleep'})}>
        Sleep
      </button>

      <h2>The List</h2>
      {state.map(item => ( 
        <div className={`${item.completed ? 'completed' : ''}`}
        onClick={() => dispatch({type: 'COMPLETE', payload: ''})}
        >
          {item.text}
      </div> ))
      }
      
    </div>
  )
}

export default TodoList;