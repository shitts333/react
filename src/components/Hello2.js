import React from "react";
import Name from "./Name";
function Hello(props) {
    return <h1>Hello, my name is <Name name={props.name} surname={props.surname} /> {props.mark}</h1>  
}

export default Hello 







