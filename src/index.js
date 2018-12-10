import React from "react";
import ReactDOM from "react-dom";

import Calendar from "./components/calendar";

function App() {
  return <Calendar />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
