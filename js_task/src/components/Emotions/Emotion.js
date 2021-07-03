import React, { useContext } from "react";
import dataContext from "../context/dataContext";
import classes from "./Emotion.module.css";
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
  const cell = datapoints.map((point) => (
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

  // custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      // destructuring from payload
      const { emotion, X, Y, log_count } = payload[0].payload;
      return (
        <div className={classes.card}>
          <p className={classes.title}>{`Emotion: ${emotion}`}</p>
          <p className={classes.desc}>
            {`X: ${X}`}
            <br />
            {`Y: ${Y}`} <br />
            {`Log count: ${log_count}`}
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <ScatterChart
      style={style}
      width={825}
      height={400}
      margin={{
        top: 20,
        right: 60,
        bottom: 0,
        left: 20,
      }}
    >
      <CartesianGrid />
      <XAxis type='number' dataKey='X' name='emotion' unit='' />
      <YAxis type='number' dataKey='Y' name='emotion' unit='' />
      {/* <Tooltip cursor={{ strokeDasharray: "3 3" }} /> */}
      <Tooltip content={<CustomTooltip />} />
      <Legend align='left' verticalAlign='middle' layout='vertical' />
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
