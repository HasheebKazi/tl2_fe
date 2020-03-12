/** Module Imports **/
/** Built-ins */
import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
/** Internal **/
/** CSS */
import classes from './App.module.css';
/** Components */
import Tracker from './containers/Tracker/Tracker';

/** Source Code **/
class App extends Component {

    render() {
        return (
            <div>
                <h1 className={ classes.App } > Time Tracker </h1>
                <Tracker />
            </div>
        );
    }
}

/** Exports **/
export default App;
