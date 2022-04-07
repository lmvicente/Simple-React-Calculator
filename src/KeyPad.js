import './KeyPad.css';
import React, { Component } from 'react';

class KeyPad extends Component {

    render() {
        return (
                          <><div className="d-flex flex-row justify-content-center align-items-center align-content-stretch mt-5">
                <button className="btn btn-secondary flex-even m-1 p-5" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
                <button className="btn btn-secondary flex-even m-1 p-5" name="()" onClick={e => this.props.onClick(e.target.name)}>( )</button>
                <button className="btn btn-secondary flex-even m-1 p-5" name="%" onClick={e => this.props.onClick(e.target.name)}>%</button>
                <button className="btn btn-warning flex-even m-1 p-5" name="/" onClick={e => this.props.onClick(e.target.name)}>/</button>
            </div><div className="d-flex flex-row justify-content-center align-items-center align-content-stretch">
                    <button className="btn btn-info flex-even m-1 p-5" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                    <button className="btn btn-info flex-even m-1 p-5" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                    <button className="btn btn-info flex-even m-1 p-5" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                    <button className="btn btn-warning flex-even m-1 p-5" name="*" onClick={e => this.props.onClick(e.target.name)}>X</button>
                </div><div className="d-flex flex-row justify-content-center align-items-center align-content-stretch">
                    <button className="btn btn-info flex-even m-1 p-5" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                    <button className="btn btn-info flex-even m-1 p-5" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                    <button className="btn btn-info flex-even m-1 p-5" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                    <button className="btn btn-warning flex-even m-1 p-5" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
                </div><div className="d-flex flex-row justify-content-center align-items-center align-content-stretch">
                    <button className="btn btn-info flex-even m-1 p-5" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                    <button className="btn btn-info flex-even m-1 p-5" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                    <button className="btn btn-info flex-even m-1 p-5" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                    <button className="btn btn-warning flex-even m-1 p-5" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
                </div><div className="d-flex flex-row justify-content-center align-items-center align-content-stretch">
                    <button className="btn btn-info flex-even m-1 p-5" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                    <button className="btn btn-info flex-even m-1 p-5" name="00" onClick={e => this.props.onClick(e.target.name)}>00</button>
                    <button className="btn btn-info flex-even m-1 p-5" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                    <button className="btn btn-warning flex-even m-1 p-5" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                </div></>
            )
    }
}

export default KeyPad;
