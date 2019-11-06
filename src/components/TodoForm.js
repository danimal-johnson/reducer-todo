import React, { useReducer, useState } from 'react';

import appReducer from '../reducers/appReducer';
// Does this form even need its own file?

export const initialState = {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}

export const TodoForm = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [taskName, setTaskName] = useState("Blank");
  // Use state? Use reducer?

  const handleInputChange = event => {
    console.log(event.target.name, event.target.value);
    setTaskName(event.target.value);
  }
  
  const saveTask = e => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: taskName });
  };

  return (
    <div className="user-input">
      <input type="text"
        name="task"
        onChange={handleInputChange}
      />
      <button
        type="button"
        onClick={saveTask}>Save Task
      </button>
    </div>
  );
}

export default TodoForm;