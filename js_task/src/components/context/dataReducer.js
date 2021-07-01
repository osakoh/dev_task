import { DISPLAY_DATAPOINTS } from "./types";

const dataReducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_DATAPOINTS:
      return {
        ...state, // copies the state and updates it
        datapoints: action.data,
      };

    default:
      return state;
  }
};

export default dataReducer;
