import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const element = (
    <div>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, corporis?</h2>
    </div>
);

ReactDOM.render(element, document.getElementById('root2'));

ReactDOM.render(<App />, document.getElementById('root'));

setInterval(()=>{
    ReactDOM.render(<App />, document.getElementById("root1"));
}, 1000);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
