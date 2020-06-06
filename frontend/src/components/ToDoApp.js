import React from "react";
import axios from "axios";

import Header from "./Header";
import Tasks from "./Tasks";

class ToDoApp extends React.Component {
  state = {
    tasks: null,
    loading: true,
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/",{
      headers:{
        "Content-Type":"application/json"
      }
    }).then((response) => {
      console.log(response.data);
      this.setState({
        tasks: [...response.data],
        loading: false,
      });
    });
  }

  addTask = (name) => {
    // console.log(name);
    axios
      .post(`http://127.0.0.1:8000/api/`, { name: name })
      .then((response) => {
        console.log(response);
        this.setState((state, props) => {
          return {
            tasks: [...state.tasks, response.data],
          };
        });
      });
  };

  deleteTask = (id) => {
    console.log(id);
    axios
      .delete(`http://127.0.0.1:8000/api/${id}`, { data: id })
      .then((response) => {
        console.log(response);
        const updatedTasks = this.state.tasks.filter((task) => {
          return task.id !== id;
        });
        console.log(this.state.todos, updatedTasks);
        this.setState({
          tasks: updatedTasks,
        });
      }).catch(err=>{
        console.log(err.response.error);
      })
  };

  render() {
    return (
      <div>
        <Header onAdd={(name) => this.addTask(name)} />

        {this.state.loading && !this.state.tasks ? (
          <p>Loading...</p>
        ) : (
          <Tasks onDelete={this.deleteTask} tasks={this.state.tasks} />
        )}
      </div>
    );
  }
}

export default ToDoApp;