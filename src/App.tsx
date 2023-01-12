import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ReactRorApp} from "react-ror";
import {controllerMapping} from "./conf/ControllerMapping";

function App() {
  return (
    <ReactRorApp controllerMapping={controllerMapping} />
  );
}

export default App;
