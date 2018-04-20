import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Homepage from './components/App';

export default (
  <Switch>
    <Route component={Homepage} exact path="/" />
  </Switch>
);
