import logo from './logo.svg';
import './App.css';
import KeyPad from './KeyPad';
import Result from './Result';
import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {
        if (button === "=") {
            this.calculate()
        }

        else if (button === "C") {
            this.reset()
        }

        else if (button === "()") {
            this.setState({
                result: "(" + this.state.result + ")"
            })
        }

        else if (button === "%") {
            this.setState({
                result: this.state.result / 100
            })
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    }

    calculate = () => {
        try {
            this.setState({
                result: (eval(this.state.result) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "Error!"
            })
        }
    }

    reset = () => {
        this.setState({
            result: ""
        })
    }

    render() {
        return (
            <div className="App-Background">
                <div className="container ">
                    <div className="row pt-5">
                        <div className="col text-center">
                            <h1 className="Header-Style">Simple React Calculator</h1>
                            <h3 className="Subheader-Style"> Made with React and Bootstrap</h3>
                        </div>
                    </div>

                    <div className="row">
                        <Result result={this.state.result}/>
                    </div>

                    <KeyPad onClick={this.onClick} />

                </div>
            </div>
        );
    }
}


export default App;
