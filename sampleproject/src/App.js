// App component having Users. This USers Component having User
// States- does it fom inside
// Props- does it from outside
// setState- important and comes virtual DOM power here

//<!-- calling Users component-->
import React, {Component} from 'react';
import Users from './Users'; //returns user details
import './index.css';

class App extends React.Component{

    render(){
        return(
            <div className="App">
            <Users/> 
            </div>
        );
    }
}

export default App;
