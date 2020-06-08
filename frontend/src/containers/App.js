import React, { Component } from 'react';
import './App.css';
import ToDoApp from '../containers/ToDo/ToDoApp';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>ToDo APP</h1>
        <ToDoApp/>
      </div>
    );
  }
}

export default App;