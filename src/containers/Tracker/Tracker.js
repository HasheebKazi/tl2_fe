import React, { Component } from 'react';

import classes from './Tracker.module.css';

class Tracker extends Component {


    state = {
        log: {
            items: [
                {'Time': '9:00', 'Activity': 'Out of bed'},
                {'Time': '10:00', 'Activity': 1},
                {'Time': '11:00', 'Activity': 2},
                {'Time': '12:00', 'Activity': 3},
                {'Time': '13:00', 'Activity': 4}
            ]
        }
    }

    render() {

        let mylog = <div> No entries found </div>;
        console.log(this.state.log.items);
        if (this.state.log.items != null) {
            mylog = [];
            this.state.log.items.forEach((item, index) => {
                mylog.push(
                    <div key={ index } >
                        <span> { item['Time'] + ' Am' } </span> - <span> { item['Activity'] } </span>
                    </div>
                )
            });
        }
        console.log('mylog', mylog);

        return (
            <div className={ classes.Wrapper }>
                <h1> Time Tracker </h1>
                { mylog }
                <h2> Add Activity </h2>
            </div>
        );
    }
}
export default Tracker;
