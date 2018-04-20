import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';

import BrownianMotion from './animations/BrownianMotion';
import LSystems from './animations/LSystems';
import Oscillator from './animations/Oscillator';
import PieChart from './animations/PieChart';
import Reach from './animations/Reach';
import Spirograph from './animations/Spirograph';

import Routes from './Routes';

class App extends Component {
  render() {
    const styles = {
      height: '1%',
      width: '1%',
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="appdiv">
          <h1>Click One!</h1>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/BrownianMotion">
            <p>Brownian Motion</p>
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
          <Link to="/PieChart">
            <p>Pie Chart</p>
          </Link>
          {Routes}
        </div>
      </div>
    );
  }
}

export default App;
