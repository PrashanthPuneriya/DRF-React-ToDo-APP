import React from "react";
import Task from "./Task";

class Tasks extends React.Component {
  render() {
    let tasks = this.props.tasks.map((task) => {
      return <Task key={task.id} onDelete={this.props.onDelete} task={task} />;
    });
    return <div className="Show-Tasks">{tasks}</div>;
  }
}

export default Tasks;