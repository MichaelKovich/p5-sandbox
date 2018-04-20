import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";

import P5Wrapper from "react-p5-wrapper";
import BrownianMotion from "./animations/BrownianMotion";
import Routes from "./Routes";

class App extends Component {
  render() {
    const styles = {
      height: "1%",
      width: "1%"
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="appdiv">
        <h1>Click One!</h1>
        <Link to="/BrownianMotion">
          <p>Brownian Motion</p>
        <P5Wrapper sketch={BrownianMotion} />
        </Link>
        <Link to="/Oscillator">
          <p>Oscillator</p>
        </Link>
        <Link to="/Spirograph">
          <p>Spirograph</p>
        </Link>
        <Link to="/Reach">
          <p> Reach </p>
        </Link>
        <Link to="/LSystems">
          <p>L Systems</p>
        </Link>
        {Routes}
        </div>
      </div>
    );
  }
}

export default App;
