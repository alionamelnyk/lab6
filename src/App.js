import React, { Component } from 'react';
import './App.css';

import { Header } from './components/Header';
import { Author } from './components/Author';
import { Todo } from './components/Todo';

let todos = [
    {
        name: 'Купити хліб',
        date: new Date('2018, 5, 12')
    },
    {
        name: 'Принести води',
        date: new Date('2018, 4, 27')
    },
    {
        name: 'Приготувати суп',
        date: new Date('2018, 4, 29')
    },
]

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Author name="Альона Мельник"/>
                <Todo todos = {todos}/>
            </div>
        );
    }
}

export default App;
