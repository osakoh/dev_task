import React, { useReducer } from "react";
import dataReducer from "./dataReducer";
import dataContext from "./dataContext";
import { DISPLAY_DATAPOINTS } from "./types";

// destructure children from props
const DataState = ({ children }) => {
  // declare initial state
  const initialState = {
    datapoints: [],
  };

  // initialise useReducer
  const [state, dispatch] = useReducer(dataReducer, initialState);

  // function
  const getDataPoints = () => {
    const res = [1, "hello", 5, 6];

    dispatch({ type: DISPLAY_DATAPOINTS, data: res });
  };

  // return a provider
  return (
    <dataContext.Provider
      // global constants & function
      value={{
        // states
        datapoints: state.datapoints,
        // functions
        getDataPoints,
      }}
    >
      {/* wraps entire application */}
      {children}
    </dataContext.Provider>
  );
};

export default DataState;
