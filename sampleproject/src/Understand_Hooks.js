import React, { Component} from 'react';

class testHooks extends React.Component{

    constructor(){
        super();
        
        console.log("constructor");
        
    }

    ComponentDidMount()
    {
        console.log("reches when component created ");
    }
    ComponentWillUnmount()
    {
        console.log("reaches when destory/freeze the component")
    }
    componentWillMount()
    {
        console.log("reches when component created")
    }

    reder()
    {
        return(<h1>Hello componenets life cycle </h1>);
        console.log("Render reached")
    }
}

export default testHooks;