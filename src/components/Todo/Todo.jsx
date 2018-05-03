import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                {this.props.todos && this.props.todos.map((item, index) =>
                    <div className="item" key={index}>
                        <div className="index">{index + 1}</div>
                        <div className="todo-item">{item.name}</div>
                        <div>Дата: {item.date.toDateString()}</div>
                    </div>
                )}
            </div>
        );
    }
}

export { Todo };
