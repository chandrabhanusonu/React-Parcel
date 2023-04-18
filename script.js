import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { style: { backgroundColor: "red" } },
  "React to Created By Parcel"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
