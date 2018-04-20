import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import App from './App';
import BrownianMotion from './pages/BrownianMotion';
import Oscillator from './pages/Oscillator';
import Spirograph from './pages/Spirograph';
import Reach from './pages/Reach';
import LSystems from './pages/LSystems';
import PieChart from './pages/PieChart';

export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/BrownianMotion" component={BrownianMotion} />
    <Route path="/Oscillator" component={Oscillator} />
    <Route path="/Spirograph" component={Spirograph} />
    <Route path="/Reach" component={Reach} />
    <Route path="/LSystems" component={LSystems} />
    <Route path="/PieChart" component={PieChart} />
  </Switch>
);
