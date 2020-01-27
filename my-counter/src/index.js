import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from "prop-types";
//import './clock.js';




function Counter(props){
    return (
        <div className="bigCounter">
            <div className="four">{props.digitFour}</div>
            <div className="three">{props.digitThree}</div>
            <div className="two">{props.digitTwo}</div>
            <div className="one">{props.digitOne}</div>
        </div>
    );
}

Counter.propTypes = {
  digitOne:PropTypes.number,
  digitTwo:PropTypes.number,
  digitThree:PropTypes.number,
  digitFour:PropTypes.number
}
let counter = 0;
setInterval( function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two= Math.floor(counter/10);
    const one= Math.floor(counter/1);
    counter++;
    ReactDOM.render(<Counter digitOne = {one} digitTwo = {two} digitThree = {three} digitFour = {four}/>, document.getElementById('root')); }, 1000);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

