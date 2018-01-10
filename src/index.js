import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Routes } from './app.routes';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    // this.doAction = this.doAction.bind(this);
  }

  doAction = (event) => {
    alert("hey, I'm from Click me button click event..");
  };

  render() {
    return (
      <Routes />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


