import React, { Component } from 'react';
import './App.css';

import ToDoCRUD from '../components/ToDoApp';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>ToDo APP</h1>
        <ToDoCRUD/>
      </div>
    );
  }
}

export default App;