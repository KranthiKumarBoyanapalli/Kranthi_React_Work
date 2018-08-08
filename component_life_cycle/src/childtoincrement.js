import React, { Component} from 'react';


class ChildToIncrement extends React.Component
{
    
    constructor(props)
    {
        super();
        console.log("Constructor:"+ props.displayValue);
    }
    componentWillMount()
    {
        console.log("Component Will Mount")
    }
    componentDidMount()
    {
        console.log("Component Did Mount")
    }

    getDefaultProps()
    {
        console.log("Get Default Props"); 
        //getDefaultProps was defined on ChildToIncrement, a plain JavaScript class. 
        //This is only supported for classes created using React.createClass. 
        //Use a static property to define defaultProps instead.
    }
    getInitialState()
    {
        console.log("Get initial state")
        //Warning: getInitialState was defined on ChildToIncrement, a plain JavaScript class. 
        //This is only supported for classes created using React.createClass.
        // Did you mean to define a state property instead?
    }
    componentWillReceiveProps(newprops)
    {
        console.log("Component will receive props"+newprops.displayValue)
    }
    shouldComponentUpdate(newprops,newstate) //parameters OPTIONAL
    // If u write this method, auto increment in render wont happend unless here return true
    {
        console.log("Should component Update"+newprops);
        return true;
    }
    componentWillUpdate(nextprops,nextstate)//parameters OPTIONAL
    // If u write this method, this wont happend unless shouldComponentUpdate() is true
    {
                console.log("Component Will Update"+nextprops)
    }
    componentDidUpdate(prevprops,prevstate)//parameters OPTIONAL
    {
        console.log("Component Did Update")
    }

    componentWillUnmount()
    {
        console.log("Component Will Unmount")
    }
    render()
    {
 
    return(
        <h1>Child: {this.props.displayValue}</h1>);

    }
}
export default ChildToIncrement;

