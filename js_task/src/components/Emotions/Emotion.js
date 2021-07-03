import React, { useContext } from "react";
import dataContext from "../context/dataContext";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";

const Emotion = () => {
  // init dataContext
  const ctx = useContext(dataContext);
  // destructuring from context
  const { datapoints } = ctx;

  return (
    <ScatterChart
      style={style}
      width={800}
      height={600}
      margin={{
        top: 200,
        right: 100,
        bottom: 20,
        left: 200,
      }}
    >
      <CartesianGrid />
      <XAxis type='number' dataKey='X' name='emotion' unit='' />
      <YAxis type='number' dataKey='Y' name='emotion' unit='' />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Scatter name='A school' data={datapoints} fill='#8884d8'>
        <LabelList dataKey='X' />
      </Scatter>
    </ScatterChart>
  );
};

const style = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,

  margin: "auto",
};

export default Emotion;
