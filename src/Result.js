import React, { Component } from 'react';
import './Result.css'

class Result extends Component {
    render() {
        let { result } = this.props;
        return (
            <input type="textbox" className="text-box-style m-1 text-center" id="textbox" value={result} readOnly />
            )
    }
}


export default Result;