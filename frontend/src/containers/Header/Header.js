import React from "react";

class Header extends React.Component {
  state = {
    userInput: "",
  };
  changeInputHandler = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  render() {
    return (
      <div className="Add-Task">
        <input
          type="text"
          onChange={(event) => this.changeInputHandler(event)}
          value={this.state.userInput}
          placeholder="Add tasks..."
        />
        {/* <button onClick={this.props.onAdd.bind(null,this.state.userInput)}>Add</button> */}
        <button onClick={() => this.props.onAdd(this.state.userInput)}>
          Add
        </button>
      </div>

    );
  }
}

export default Header;