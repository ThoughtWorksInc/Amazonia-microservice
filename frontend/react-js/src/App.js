import React, { Component } from 'react';
import sun from './28.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {weather: {}};
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    return fetch('http://localhost:4567/weather/london')
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


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Reactive Weather</h2>
        </div>
        <p className="App-intro">
          Hello world! Your weather in {this.state.weather.location} is {this.state.weather.forecast} with a grand {this.state.weather.temperature} {this.state.weather.temperatureUnits}
        </p>
        <img src={sun} className="sun" alt="sun" />
      </div>
    );
  }
}

export default App;
