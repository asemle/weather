import React, { Component } from 'react'
import axios from 'axios';

export default class Time extends Component {
    constructor() {
        super();
        this.state = {
            time: ''
        }
    }
    componentDidMount() {
        var targetDate = new Date() // Current date/time of user computer
        var timestamp = targetDate.getTime() / 1000 + targetDate.getTimezoneOffset() * 60;
        var timeUrl = 'https://maps.googleapis.com/maps/api/timezone/json?location=' + this.props.coords.lat + "," + this.props.coords.lon + '&timestamp=' + timestamp + '&key=AIzaSyBMzMgZpX78CfheimlXNqthugCNM1Q7uRA'
        axios.get(timeUrl)
            .then((res) => {
                var date = new Date(timestamp * 1000 + res.data.dstOffset * 1000 + res.data.rawOffset * 1000)
                var time = ((date.getHours() + 24) % 12 || 12) + ":" + date.getMinutes() + (date.getHours > 12 ? " PM":" AM")
                this.setState({
                    time: time
                })
                // this.setState({
                //     time: (new Date(timestamp * 1000 + res.data.dstOffset * 1000 + res.data.rawOffset * 1000)).toLocaleString()
                // })
            })
    }
    render() {
        return (
            <div>
                {this.state.time}
            </div>
        )
    }
}

