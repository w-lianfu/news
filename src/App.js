import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

import '@commonScss/semantic.scss';
import '@commonScss/index.scss';

import { Button } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <Icon className="twitter" />
        <p>Welcome to News!</p>
        <p>在 .flowconfig options 中添加 在 js 文件中报错行添加 完美解决!!</p>
        <Button color="purple">Purple</Button>
      </div>
    )
  }
}

export default App;
