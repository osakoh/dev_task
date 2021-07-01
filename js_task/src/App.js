import React, { Fragment, useEffect, useContext } from "react";
import loginContext from "./components/context/dataContext";

const App = () => {
  const ctx = useContext(loginContext);

  // destructure from context
  const { datapoints, getDataPoints } = ctx;

  useEffect(() => {
    getDataPoints();
    console.log();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {datapoints.map((point) => (
        <h1 key={point}>{point}</h1>
      ))}
    </Fragment>
  );
};

export default App;
