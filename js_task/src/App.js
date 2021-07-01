import React, { Fragment, useEffect, useContext } from "react";
import loginContext from "./components/context/dataContext";

const App = () => {
  const ctx = useContext(loginContext);

  // destructure from context
  const { datapoints, getDataPoints } = ctx;

  useEffect(() => {
    getDataPoints();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {datapoints.map((datapoint) => (
        <h2>
          {datapoint.emotion}
          <br />
        </h2>
      ))}
    </Fragment>
  );
};

export default App;
