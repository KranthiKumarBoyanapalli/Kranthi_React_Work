import React, { Component } from 'react';

 class MyAppWishes extends React.Component{
    render()
    {
        //return <h1><font color="Green"> Welcome message from .js but REACT!! </font></h1>
        
        return <h1><font color="Green"> Welcome message from .js but REACT!! \n 
        and reading property as {this.props.text} and ID props: {this.props.id} </font></h1>
    };
}

// code will be independent and reusable if we write functions as component
//CLass name is nothing but our function name
//export default nothing but, exporting to "root" element which is default in React


//'props' referring Properties/parameters to pass in class/function??




export default MyAppWishes;