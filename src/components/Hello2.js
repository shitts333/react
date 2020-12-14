// @ts-check
import React from "react";
import Name from "./Name"; 
import Mark from "./Mark";
import Welcome from "./Welcome";
import Text from "./Text";

function Hello(props) {
    return <h1> <Welcome welcome={props.welcome}/><Text text={props.text}/> <Name name={props.name} surname={props.surname} /> <Mark mark={props.mark}/></h1>  
}

export default Hello 







