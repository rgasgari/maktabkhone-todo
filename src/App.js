import React, { Component } from 'react';
import TodoEntry from './components/TodoEntry';
import TodoItems from './components/TodoItems';
import Operations from './components/Operations';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="todoapp" className="todoapp">
          <TodoEntry/>
          <TodoItems/>
          <Operations/>
      </div>
    );
  }
}

export default App;
