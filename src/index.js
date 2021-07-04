import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./SayHello/SayHello.css";
import SayHello from "./SayHello/SayHello";
import App from "./App/App";
import "./App/App.css";

ReactDOM.render(
  <React.StrictMode>
    <SayHello />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
