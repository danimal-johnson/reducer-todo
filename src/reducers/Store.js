import React, { createContext, useReducer } from "react"

export const StoreContext = createContext({});

const initialState = [{
  text: 'Learn about reducers',
  completed: true,
  id: 3892987589
}];

const appReducer = (state, action) => {
  console.log("Payload:", action.payload);
  switch (action.type) {
    case "ADD":
      console.log("Adding a new todo in appReducer");
      return [...state, { text: action.payload,
                          completed: false,
                          id: Date.now()}];
    case "COMPLETE":
      // Find matching node.
      // Mark as complete.
      break;
    case "DELETE":
      console.log("Deleting completed tasks.");
      // Filter through list. Only return completed tasks.
      return state.filter(item => item.completed === false );
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