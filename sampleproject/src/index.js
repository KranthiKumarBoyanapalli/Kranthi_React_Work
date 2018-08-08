import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Welcome from './mycomponent';// mycomponent.js by kranthi
import MyAppWishes from './MyApp'; // importing <created function> from <created .js file>
import Clock from './Clock_State'; // importing Clock class/function from Clocl_State.js
import registerServiceWorker from './registerServiceWorker';
import testHooks from './Understand_Hooks';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Clock />, document.getElementById('root'));
//ReactDOM.render(<MyAppWishes />, document.getElementById('root')); //calling class
//ReactDOM.render(<MyAppWishes text="telugu as property" id="mytext"/>, document.getElementById('root')); //calling class
//ReactDOM.render(<testHooks />, document.getElementById('root'));
//ReactDOM.render(<App />,document.getElementById('root'));
registerServiceWorker();

//root is a default id
//ReactDOM.render for display component
//ALL required plugins can be imported/
