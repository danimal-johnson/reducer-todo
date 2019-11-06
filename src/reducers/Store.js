import React, { createContext, useReducer } from "react"

const StoreContext = createContext({});

const initialState = {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}

const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      console.log("Adding a new todo in appReducer");
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      }
      return [...state, {newTodo}];
    case "COMPLETE":
      // Find matching node.
      // Mark as complete.
      break;
    case "DELETE":
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