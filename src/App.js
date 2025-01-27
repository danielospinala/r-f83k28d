import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    count: 0
  };
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };

  render() {
    return (

      <div>

        <span className="value">{this.state.count}</span>
        <button id="inc" onClick={this.handleClick}>Incrementa</button>
      </div>

    );
  }
}

export default App;
