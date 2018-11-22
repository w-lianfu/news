// @flow
import React, { Component } from 'react';

import '@commonScss/semantic.scss';
import '@commonScss/index.scss';

import AppRouter from '@commonComp/app-router';

class App extends Component<{}, {}> {
  render() {
    return (
      <AppRouter />
    )
  }
}

export default App;
