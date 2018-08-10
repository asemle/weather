import React, { Component } from 'react';

import Time from './Time'

export default class HomeSlice extends Component {
    render() {
        return (
            <div className="slice">
                <Time coords={JSON.parse(this.props.data).coord}/>
                {this.props.data}
            </div>
        )
    }
}
