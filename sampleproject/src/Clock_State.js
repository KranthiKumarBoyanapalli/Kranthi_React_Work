//************* STATE ******************* */
//Example: whater STATE will change to solid,liquid or air based on applied "temperature"

import React, { Componenet } from 'react';

class Clock extends React.Component{ //every class which we create should child of React.Component
   constructor(props) { 
        //To initiatlize the state value, constructor required
  
        super(props);
        this.timerID= setInterval(()=> this.updateTime(), 1000);
        console.log("Constructor");
        this.state={date: new Date(),
                    props:"Welcome"}; //Assigned Date() object to 'date' variable
    }
    componentDidMount(){ //it is a component and calls whenever rendering output to DOM
        //this.timerID= setInterval(()=> this.updateTime(), 1000);//updateTime() user defined
    // based on this we can set update. every second it calls updateTime()
    //setState() is important. Static values could not apply. Asynch call
    }
    componentWillMount(){
        
        console.log("component Will Mount");
      
    }
    componentWillUnmount(){ //resources freeze purpose we can use
        //console.log("Button name:"+this.clockBtn.id)
        console.log("component Will UnMount");
       
        this.setState(
            {props: "Thank you"}
        )

        clearInterval(this.timerID); //stopping timerID value to update each second
    }
    updateTime()
    {
        this.setState(
            {date: new Date()}
        ) //setState is a predefine variable
        
        /** this.setState() to schedule updates to the component local state.
         * this.state and this.props are not reliable as 
         */
    }
    render(){
        //To return and see output of react elements or html elements
    
        return(
            <div>
            <h1> Hello Time:  {this.state.date.toLocaleTimeString()}  with {this.state.props}</h1> 
            <button onClick={this.componentWillUnmount.bind(this)} id="clockBtn">STOP</button>
            <button onClick={()=> this.componentWillUnmount()} id="clockBtn">START</button>
            </div>
        );
 
    }
}

export default Clock

/****** Life Cycle Component/ Lifecycle Hookss******************
Mounting=> How we creating component (i.e, class/function) and output ni DO/M ki render chestundi.
/
ComponenetDidMount()= When component created, it calls this. lifecycle hook
ComponenetDidUnMount()= when component removed.it calls this
*/