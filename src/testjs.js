import React from "react";
import ReactDom from "react-dom";
import Hello from "./components/Hello2"


const hello = <h1>Hello, my name is Margarita</h1>




ReactDom.render(
    <Hello name='Margarita' surname='Shitts' mark='!'/>,
    document.getElementById('root')
);







