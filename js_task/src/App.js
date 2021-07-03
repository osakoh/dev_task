import React, { useEffect, useContext } from "react";
import Emotion from "./components/Emotions/Emotion";
import dataContext from "./components/context/dataContext";

const App = () => {
  // init dataContext
  const ctx = useContext(dataContext);

  // destructure from context
  const { getDataPoints } = ctx;

  useEffect(() => {
    getDataPoints();
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <Emotion />
    </main>
  );
};

export default App;
