import React from "react";

import Old from "./Old";


export function Old(props) {
    return <h1> I am {props.old} </h1>
}


ReactDom.render(
    <Other old='16'/>,
    document.getElementById('root')

)



