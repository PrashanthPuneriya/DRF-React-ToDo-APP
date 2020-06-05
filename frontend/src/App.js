import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    todos: [],
  };

  async componentDidMount() {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/');
      // console.log(response);
      const todos = await response.json();
      // console.log(todos);
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo List</h1>
        {this.state.todos.map(item => (
          <div key={item.id}>

            <h3>{item.id}. {item.name}</h3>
            <p>Due on: {item.due_date}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
