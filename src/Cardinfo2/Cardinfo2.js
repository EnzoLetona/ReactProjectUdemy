import React from 'react';
import './Cardinfo2.css';

const Cardinfo2 = (props) => {
    return (
        <div className="card2">
             <h1 onClick={props.click}>Hello, {props.name}</h1>
             <p> tengo: {props.age} años </p>
             <p>{props.children}</p>
             <input type="text" onChange={props.changed}></input>
        </div>
        );
}
 
export default Cardinfo2;