// @flow
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
//  Redirect
} from 'react-router-dom';

import Home from '@comp/home';
import Mind from '@comp/mind';
import School from '@comp/school';
import Message from '@comp/message';
import My from '@comp/my';
import Setting from '@comp/setting';

class AppRouter extends Component<{}, {}> {
  render() {
    return (
      <Router>
        <Switch>
        {/* <Route exact path='/'
          render={props => <Redirect to={{pathname: '/read'}} />}  /> */}
          <Route exact path='/' component={Home} />
          <Route exact path='/find' component={Mind} />
          <Route exact path='/ask' component={School} />
          <Route exact path='/make' component={Message} />
          <Route exact path='/my' component={My} />
          <Route exact path='/setting' component={Setting} />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter;
