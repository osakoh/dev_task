import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import DataState from "./components/context/DataState";

ReactDOM.render(
  <React.StrictMode>
    <DataState>
      <App />
    </DataState>
  </React.StrictMode>,
  document.getElementById("root")
);
