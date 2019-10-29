import React from "react";
import Reactdom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";
import App from "./App";
const element = <h1>hello world</h1>;
Reactdom.render(<App />, document.getElementById("root"));
const square = number => number * number;
console.log(square(5));
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
];
const activejobs = jobs.filter(job => job.isActive);
