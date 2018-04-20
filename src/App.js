import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import P5Wrapper from 'react-p5-wrapper';
import BrownianMotion from './animations/BrownianMotion';

class App extends Component {
  render() {
    const styles = {
      height: '5%',
      width: '5%',
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p style={styles}>
          <P5Wrapper sketch={BrownianMotion} />
        </p>
      </div>
    );
  }
}

export default App;
