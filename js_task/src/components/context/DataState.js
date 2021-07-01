import React, { useReducer } from "react";
import dataReducer from "./dataReducer";
import dataContext from "./dataContext";
import { DISPLAY_DATAPOINTS } from "./types";
import axios from "axios";

// destructure children from props
const DataState = ({ children }) => {
  // declare initial state
  const initialState = {
    datapoints: [],
  };

  // initialise useReducer
  const [state, dispatch] = useReducer(dataReducer, initialState);

  // function
  const getDataPoints = async () => {
    const res = await axios("data.json");

    try {
      if (res.status === 200) {
        dispatch({ type: DISPLAY_DATAPOINTS, data: res.data });
      }
    } catch (error) {
      // log errors in node console
      console.error(error.message);
    }
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
