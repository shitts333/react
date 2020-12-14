import React from "react";
import Welcome from "./Welcome";
import Text from "./text";

function welcome(props) {
    return <h1> <Welcome welcome={props.welcome}/><Text text={props.text}/></h1>  
}

export default welcome




