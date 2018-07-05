import React, { Component } from 'react';
import {Tabs, Tab, TabList, TabPanel} from 'react-tabs';
import HomeSlice from './HomeSlice';



export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: ''
        }
    }
    componentDidMount() {
        this.setState({
            weather: this.props.weather
        })
    }
  render() {
      var myLocations = '';
      if (this.props.weather.length) {
          console.log(JSON.parse(this.props.weather).list)
          myLocations = JSON.parse(this.props.weather).list.map(location =>
              <HomeSlice className="onefifth" data={JSON.stringify(location)}/>
          )
      }
      
    return (
      <div style={{background:'#83A8C3'}}>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Now</Tab>
                        <Tab>Today</Tab>
                        <Tab>This Week</Tab>
                    </TabList>

                    <TabPanel>
                        {myLocations}
                    </TabPanel>

                    <TabPanel>
                        
                    </TabPanel>

                    <TabPanel>

                    </TabPanel>
                </Tabs>
                {this.state.weather}
                
                
            </div>
      </div>
    )
  }
}
