// App component having Users. This USers Component having User
// States- does it fom inside
// Props- does it from outside
// setState- important and comes virtual DOM power here

/************* User.js is a just function component */
import React from 'react';

const User= (props)=>{
    return (<div><font color="green"> Name: {props.children} | {props.age} </font></div>)
}

export default User;

