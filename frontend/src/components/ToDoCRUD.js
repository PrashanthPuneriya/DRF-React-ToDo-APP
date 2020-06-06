import React, { Component } from "react";
import axios from 'axios';

class ToDoCRUD extends Component {
    state = {
        userInput: "",
        todos: [],
    };
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
        .then( (response) => {
            console.log(response.data);
            this.setState({
                todos: [...response.data],
            })
        })
    };
    
    // componentDidUpdate() {
    //     axios.get('http://127.0.0.1:8000/api/')
    //     .then( (resp) => {
    //         console.log(resp.data);
    //         this.setState({
    //             todos: [...resp.data],
    //         })
    //     })
    // }

    
    todoAddTaskHandler = () => {
        axios.post(`http://127.0.0.1:8000/api/`, {name: this.state.userInput})
        .then( (response) => {
            console.log(response);
        })
    }
    todoDeleteTaskHandler = (pk) => {
        axios.delete(`http://127.0.0.1:8000/api/${pk}`,{data: pk})
        .then( (response) => {
            console.log(response);
        })
    }
    changeUserInputState = (event) => {
        this.setState({
            userInput: event.target.value,
        })
    } 

    render() {
        
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
                { this.state.todos.map( item => (
                    <div key={item.id}>
                        {item.name}
                        <button onClick={() => this.todoDeleteTaskHandler(item.id)}>x</button>
                    </div>
                )) }
                </div>

            </div>
        );
    };
}

export default ToDoCRUD;