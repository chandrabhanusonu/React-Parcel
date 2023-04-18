import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  { style: { backgroundColor: "red" } },
  "Welcome To React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
