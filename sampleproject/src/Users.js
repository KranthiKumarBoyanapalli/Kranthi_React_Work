// App component having Users. This USers Component having User
// States- does it fom inside
// Props- does it from outside
// setState- important and comes virtual DOM power here
import React, {componenet} from 'react';
import User from './User';

//<!-- calling User component by creating Class-->

class Users extends React.Component{
// STATE can be u sed only in class components which extended the Componenent
//if we user onclick=fun, then it executes when user click, 
//if we use onclick=fun(), then it executes when parsing the code.

state={
    users:[{name:"Abc",age:20},
    {name:"Def",age:30},
    {name:"Gh",age:40},{name:"goodness", age:100}],
    title: "Users List"
};

MakeMeYounger=()=>
{
    console.log("Clciked Me!!");
    //this.state.Users[0].age -=10;
    //Above: TypeError: Cannot read property '0' of undefined
/* Ststic way is below*/
/*
    this.setState({
    users: [
    {name:"Abc",age:10},
    {name:"Def",age:10},
    {name:"Gh",age:10}
    ],
    title: "Updated Users List"
}
);*/
/*Dynamic way is below*/
const newState=this.state.users.map(
    (user)=>{
        const eachUser=user;     
        eachUser.age -=10;
        if(eachUser.age<=0)
        {
            eachUser.age=0;
        }
        return eachUser;
    });

    this.setState(newState);
    console.log("New State:"+ newState)
    newState.forEach(
        (names)=> {
            console.log("New State:"+ names.name + ":" + names.age)
        }
    )
    this.state.users.forEach(
        (names)=> {
            console.log("Initial State:"+ names.name + ":" + names.age)
        }
    )
        
    
}
    render()
    {
        return(
            <div>        
            <button onClick={this.MakeMeYounger}>Make Me Younger!!</button>
    
            <h1><font color="Green">{this.state.title}</font></h1>
              
               // Dynamic is below
               { // need to do tripulation
               this.state.users.map(
                   (user)=>{
                       return (<User age={user.age}> {user.name} </User>)

                   }
               )
               }
            </div>
        );
    }
}

export default Users;

/*-- static is below -->
               <User age={this.state.users[0].age}>
               {this.state.users[0].name}
               </User>
               */