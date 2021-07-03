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
  Legend,
  Cell,
} from "recharts";

const Emotion = () => {
  // init dataContext
  const ctx = useContext(dataContext);
  // destructuring from context
  const { datapoints, showColor } = ctx;

  // give each point/cell a different color
  const cell = datapoints.map((point, index) => (
    <Cell key={point.emotion_id} fill={showColor(point)} />
  ));

  // show the scatter plot and cell
  const scatter = datapoints.map((datapoint) => (
    <Scatter
      key={datapoint.emotion_id}
      name={datapoint.emotion}
      data={datapoints}
      fill={showColor(datapoint)}
      shape='circle'
    >
      <LabelList dataKey='emotion' position='top' />
      {cell}
    </Scatter>
  ));

  return (
    <ScatterChart
      style={style}
      width={930}
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
      <Legend />
      {scatter}
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
