import React from 'react';
import './App.css';

import Home from "./pages/Home";
import Vessels from "./pages/Vessels";
import SingleVessel from "./pages/SingleVessel";
import Error from "./pages/Error";

import {Route, Switch} from "react-router-dom";

import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    {/* Navbar va messa prima di switch perche ce la portiamo 
        dietro per ogni pagina  che scegliamo */}
    <Navbar /> 
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/vessels" component={Vessels}/>
        <Route exact path="/vessels/:slug" component={SingleVessel}/>
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
