import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import axios from 'axios';
import { getWeather } from './ducks/getWeather.js';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentweather: []
    }
  
  }

  componentDidMount() {
    console.log(localStorage.getItem("places"))
    var ids = JSON.parse(localStorage.getItem("places"));
    if (ids) {
      console.log(ids)
      const weatherurl = 'http://api.openweathermap.org/data/2.5/group?id=' + ids.filter((id) => id !== null).join(",") + '&appid=4c107beba1b1186da1182d620c8a6317&units=imperial'
      this.props.getWeather(weatherurl);
      
    }
    else {
      navigator.geolocation.getCurrentPosition(((pos) => {
        const weatherurl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + pos.coords.latitude + '&lon=' + pos.coords.longitude + '&appid=4c107beba1b1186da1182d620c8a6317&units=imperial'
        axios.get(weatherurl)
          .then((res) => {
            console.log(res.data)
            this.setState({
              weather: JSON.stringify(res.data)
            })
            var locale = [null,null,null,null,null]
            locale[0] = res.data.id
            // if (JSON.parse(localStorage.getItem("places")))
            localStorage.setItem("places", JSON.stringify(locale))
          })

      }))
    }
  }
  render() {
    return (
      <div className="App">
        <Home currentweather={this.props.currentweather}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentWeather: state.weather
  }
}

export default connect(mapStateToProps, { getWeather })(App);

