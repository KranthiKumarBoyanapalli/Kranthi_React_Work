import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChildToIncrement from './childtoincrement';

class App extends Component {

state={
  name:"kranthi",
  age:20,
  increment:0
}
  
IncrementValue=()=>{
  this.setState({increment: this.state.increment+=1});
}


  render() {
    return (
      <div>
      <br/>
      <button onClick={this.IncrementValue}>Click Me! {this.state.increment}</button>
        <ChildToIncrement displayValue={this.state.increment}></ChildToIncrement>
      </div>
    );
  }
}

export default App;
