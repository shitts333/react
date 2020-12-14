// @ts-check

import React from "react";

import Testclass from "./Testclass";
export default class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to the page!</h1>
                <p>{this.props.welcome} {this.props.text} {this.props.name} {this.props.surname} {this.props.mark}  </p>
                <Testclass testmessage='привет' />
            </div>
        )
    }
}







