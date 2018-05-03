import React, { Component } from 'react';
import './Author.css';

class Author extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="name">
                Автор: 
                <span>
                    {this.props.name}
                </span>
            </div>
        );
    }
}

export { Author };
