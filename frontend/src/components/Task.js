import React from "react";

class Task extends React.Component {
  render() {
    return (
      <div >
        {this.props.task.name}
        <button onClick={() => this.props.onDelete(this.props.task.id)}>
          x
        </button>
      </div>
    );
  }
}

export default Task;