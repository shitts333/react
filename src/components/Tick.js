import React from "react";
class Tick extends React.Component {
    constructor(props) {
        super(props)
        console.log(this)
        this.state = {
            time: new Date().toLocaleTimeString()
        } 
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>Hello, world</h1>
                <h2>Time: {new Date().toLocaleTimeString()}</h2>
            </div>
        )

    }
}



