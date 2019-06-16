import React, { Component } from 'react';
import Nave from './Nave'
import Main from './Main';



class App extends Component {
  render() {
    return (
    <div className="App">
      <Nave/>
      <Main/>
    </div>);
  }
}

export default App