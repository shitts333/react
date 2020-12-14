import React from "react";
import ReactDom from "react-dom";
//import Hello from "./components/Hello2";
import Hello3 from "./class/Hello3";

const hello = <h1>Hello, my name is Margarita</h1>




ReactDom.render(
    <Hello3 name='Margarita' surname='Shitts' mark='!' welcome='Hello,' text='my name is'/>,
    document.getElementById('root')
);










