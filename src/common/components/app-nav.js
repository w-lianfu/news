// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AppNav extends Component<{}, {}> {
  render() {
    return (
      <footer>
        <Link to='/read'>
          <label>阅读</label>
        </Link>
        <Link to='/find'>
          <label>发现</label>
        </Link>
        <Link to='/ask'>
          <label>72问</label>
        </Link>
        <Link to='/make'>
          <label>我造</label>
        </Link>
        <Link to='/my'>
          <label>我的</label>
        </Link>
      </footer>
    )
  }
}

export default AppNav;
