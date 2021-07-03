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

  // show different shape based on emotion type
  //types: 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye'

  const showShape = (data) => {
    switch (data.emotion) {
      case "Alive":
        return "circle";

      case "Disappointed":
        return "cross";

      case "Cheerful":
        return "diamond";

      case "Motivated":
        return "square";

      case "Tense":
        return "star";

      case "Kind":
        return "triangle";

      case "Curious":
        return "wye";

      default:
        return {};
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
        showShape,
      }}
    >
      {/* wraps entire application */}
      {children}
    </dataContext.Provider>
  );
};

export default DataState;
