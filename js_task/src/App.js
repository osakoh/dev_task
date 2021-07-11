import React, { useEffect, useContext } from "react";
import Emotion from "./components/Emotions/Emotion";
import dataContext from "./components/context/dataContext";

const App = () => {
  // init dataContext
  const ctx = useContext(dataContext);

  // destructure from context
  const { getDataPoints, datapoints } = ctx;

  useEffect(() => {
    getDataPoints();

    // console.log(datapoints);
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      {/* {datapoints.length > 1 && console.log(datapoints)} */}
      {datapoints.length > 1 && <Emotion />}
    </main>
  );
};

export default App;
