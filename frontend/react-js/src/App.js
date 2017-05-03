import React, { Component } from 'react';
import sun from './28.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {weather: {}, events: {}};
  }

  componentDidMount() {
    this.getWeather();
    this.getEvents();
  }

  getWeather() {
    return fetch('http://127.0.0.1:5000/weather/london')
    .then(response => response.json())
    .then((responseJson) => {
      this.setState({
        weather: responseJson
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }

  getEvents() {
    return fetch('http://127.0.0.1:4567/events/london')
    .then(response => response.json())
    .then((responseJson) => {
      this.setState({
        events: responseJson
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Reactive Weather</h2>
        </div>
        <p className="App-weather">
          Hello world! Your weather in {this.state.weather.location} is {this.state.weather.forecast} with a grand {this.state.weather.temperature} {this.state.weather.temperatureUnits}
        </p>
        <p className="App-events">
          Hello world! You can go to {this.state.events.what} at {this.state.events.location} at {this.state.events.when} check this link for more information {this.state.events.link}
        </p>
        <img src={sun} className="sun" alt="sun" />
      </div>
    );
  }
}

export default App;
