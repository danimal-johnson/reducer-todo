import React, { createContext, useReducer } from "react"

export const StoreContext = createContext({});

const initialState = [{
  text: 'Learn about reducers',
  completed: false,
  id: 3892987589
}];

const appReducer = (state, action) => {
  console.log("Payload:", action.payload);
  switch (action.type) {
    case "ADD":
      console.log("Adding a new todo in appReducer");
      const newTodo = {
        text: action.payload,
        completed: false,
        id: Date.now()
      }
      return [...state, {newTodo}];
    case "COMPLETE":
      // Find matching node.
      // Mark as complete.
      break;
    case "DELETE":
      console.log("Deleting completed tasks.");
      // Map through list.
      // Delete each node that has been completed.
      break;
    default:
      console.error ("Unhandled state in appReducer.");
  }
}

const Store = ({children}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <StoreContext.Provider value={[state,dispatch]}>{children}
    </StoreContext.Provider>
  )
}

export default Store;