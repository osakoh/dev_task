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

  // get data from the json file in public folder
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

  // change color based on emotion type
  const showColor = (data) => {
    switch (data.emotion) {
      case "Alive":
        return "#15AA00";

      case "Disappointed":
        return "#959BE5";

      case "Cheerful":
        return "#A0DFA0";

      case "Motivated":
        return "#E6E500";

      case "Tense":
        return "#CA8A00";

      case "Kind":
        return "#BCE597";

      case "Curious":
        return "#FFA854";

      default:
        return "#edf6f9";
    }
  };

  // change color based on emotion type
  // 'line' | 'plainline' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'star' | 'triangle' | 'wye'
  const changeShape = (data) => {
    console.log(data);
    switch (data.emotion) {
      case "Alive":
        return "line";

      case "Disappointed":
        return "plainline";

      case "Cheerful":
        return "square";

      case "Motivated":
        return "rect";

      case "Tense":
        return "circle";

      case "Kind":
        return "cross";

      case "Curious":
        return "diamond";

      default:
        return "#triangle";
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
        showColor,
        changeShape,
      }}
    >
      {/* wraps entire application */}
      {children}
      {/* wraps entire application */}
    </dataContext.Provider>
  );
};

export default DataState;
