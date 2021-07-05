import React, { createContext, useReducer } from "react"

export const StoreContext = createContext({});

const initialState = [{
  text: 'Learn about reducers',
  completed: true,
  id: 3892987589
}];

const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { text: action.payload,
                          completed: false,
                          id: Date.now()}];
    case "COMPLETE":
      // Find matching node.
      let result = state.map(i=>i);
      for (let item of result) {
        if (item.id === action.payload) {
          // Toggle complete status.
          item.completed = !item.completed;
        }
      }
      
      return result;

    case "DELETE":
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