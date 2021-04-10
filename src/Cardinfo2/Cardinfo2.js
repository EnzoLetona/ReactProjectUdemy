import React from 'react';
import './Cardinfo2.css';
import styled from 'styled-components'

const StyledDiv = styled.div` 
    border: 1px solid blue;
    width: 200px;
    display: inline-block;
    padding: 20px;
    margin: 10px;
    box-shadow: 0 2px 2px #ccc;
    `;

const Cardinfo2 = (props) => {
    return (
        <StyledDiv>
             <h1 onClick={props.click}>Hello, {props.name}</h1>
             <p> tengo: {props.age} años </p>
             <p>{props.children}</p>
             <input type="text" onChange={props.changed}></input>
        </StyledDiv>
        );
}
 
export default Cardinfo2;