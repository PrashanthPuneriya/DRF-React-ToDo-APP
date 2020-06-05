import React, { Component } from "react";
import axios from 'axios';

class ToDoCRUD extends Component {
    state = {
        todos: [],
    };
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
        .then( (resp) => {
            console.log(resp.data);
            this.setState({
                todos: [...resp.data],
            })
        })
    }

    render() {
        return (
            <ul> {
                this.state.todos.map( item => (
                    <li key={item.id}>{item.id}. {item.name} Due on: {item.due_date}</li>
                ))  
            } </ul>
        );
    };
}

export default ToDoCRUD;