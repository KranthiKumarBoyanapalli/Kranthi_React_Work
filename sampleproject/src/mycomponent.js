// function Welcome()
// {
//       return "<h1> welcome to React course!!</h2>";
// }

// required to consider as COMPONENT in react as below
//converting function name to class name
import React, { Component } from 'react';
export default class Welcome extends React.Component{
 render() {
     return <h1>welcome to React course!!</h1>;
 }
}

// need to export to index.js