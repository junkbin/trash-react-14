import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  
  render() {
    const finalElement = (
      <div className="bg-primary" >
        <Welcome id="AFF0001" name="Affixussss"/>
      </div>
    );

    return finalElement;
  }
}


function Welcome(props){
  return (
    <div>
      <hr />
      <h1>Welcome, Welcomes Everyone !!! </h1>
      <h1>{props.id}</h1>
      <h1>{props.name}</h1>
      <h1>{new Date().toLocaleTimeString()}</h1>
    </div>
  );
}






export default App;
