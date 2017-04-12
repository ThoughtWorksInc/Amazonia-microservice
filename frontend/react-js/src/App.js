import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {weather: []};
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    return fetch('http://127.0.0.1:5000/weather/london')
    .then(response => response.json())
    .then((responseJson) => {
      console.log(responseJson)
    })
    .catch((error) => {
      console.error(error);
    });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Reactive Weather</h2>
        </div>
        <p className="App-intro">
          Hello world! Your weather is...
        </p>
      </div>
    );
  }
}

export default App;
