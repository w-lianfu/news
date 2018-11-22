// @flow
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
//  Redirect
} from 'react-router-dom';

import Read from '@comp/read';
import Find from '@comp/find';
import Ask from '@comp/ask';
import Make from '@comp/make';
import My from '@comp/my';
import Setting from '@comp/setting';

class AppRouter extends Component<{}, {}> {
  render() {
    return (
      <Router>
        <Switch>
        {/* <Route exact path='/'
          render={props => <Redirect to={{pathname: '/read'}} />}  /> */}
        <Route exact path='/' component={Read} />
        <Route exact path='/find' component={Find} />
        <Route exact path='/ask' component={Ask} />
        <Route exact path='/make' component={Make} />
        <Route exact path='/my' component={My} />
        <Route exact path='/setting' component={Setting} />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter;
