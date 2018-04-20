import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import BrownianMotion from "./animations/BrownianMotion";
import Oscillator from "./animations/Oscillator";
import Spirograph from "./animations/Spirograph";
import App from "./App";
import Reach from "./animations/Reach";
import LSystems from "./animations/LSystems";

export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/BrownianMotion" component={BrownianMotion} />
    <Route exact path="/Oscillator" component={Oscillator} />
    <Route exact path="/Spirograph" component={Spirograph} />
    <Route exact path="/Reach" component={Reach} />
    <Route exact path="/LSystems" component={LSystems} />
  </Switch>
);
