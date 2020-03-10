import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import classes from './App.module.css';

class App extends Component {

    render() {
        return (
            <div>
                <h1 className={ classes.App } > Time Tracker </h1>
                <ul> Time: Activity </ul>
                <input type="text" name="time" />
                <button> Add </button>
            </div>
        );
    }
}
export default App;
