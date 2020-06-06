import React, { Component } from "react";
import axios from 'axios';

class ToDoCRUD extends Component {
    state = {
        userInput: "",
        todos: null,
    };

    fetchData = () => {
        axios.get('http://127.0.0.1:8000/api/')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    todos: [...response.data],
                })
            })
    }

    componentDidMount() {
        this.fetchData();
    };

    // componentDidUpdate(prevsProps, prevsState) { 
    // }


    todoAddTaskHandler = () => {
        axios.post(`http://127.0.0.1:8000/api/`, { name: this.state.userInput })
            .then((response) => {
                console.log(response)
                this.setState({
                    todos: [response.data, ...this.state.todos]
                })
            })
    }
    todoDeleteTaskHandler = (pk) => {
        axios.delete(`http://127.0.0.1:8000/api/${pk}`, { data: pk })
            .then((response) => {
                console.log(response);
                this.fetchData();
            })
    }

    changeUserInputState = (event) => {
        this.setState({
            userInput: event.target.value,
        })
    }

    render() {
        let tasks = <h3>Loading data...</h3>
        if (this.state.todos) {
            tasks = this.state.todos.map(item => (
                <div key={item.id}>
                    {item.name}
                    <button onClick={() => this.todoDeleteTaskHandler(item.id)}>x</button>
                </div>
            ))
        }
        return (
            <div>

                <div className="Add-Task">
                    <input
                        type="text"
                        onChange={(event) => this.changeUserInputState(event)}
                        value={this.state.userInput}
                        placeholder="Add tasks..."
                    />
                    <button onClick={this.todoAddTaskHandler}>Add Task</button>
                </div>

                <div className="Show-Tasks">
                    {tasks}
                </div>

            </div>
        );
    };
}

export default ToDoCRUD;