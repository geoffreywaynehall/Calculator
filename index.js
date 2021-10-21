import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    state = {
        theme: 1,
        display: "0",
        num1: null,
        num2: null,
        opperator: "",
        result: false
    };

    numberPress = (num) => {
        let oldDisplay = this.state.display;
        if (this.countNumerals(oldDisplay) < 16) {
            if (oldDisplay === "0") {
                this.setState({
                    display: num
                });
            } else {
                this.setState({
                    display: this.formatDisplay(oldDisplay + num)
                });
            }
        }
    }

    opperatorPress = (op) => {
        this.setState({
            opperator: op,
            num1: this.state.display,
            num2: null,
            display: "0",
            result: false

        });
    }

    equal = () => {
        if (this.state.opperator === "+") {
            if (this.state.num2 === null) {
                let result = this.formatDisplay((parseFloat(this.state.num1.replaceAll(',', '')) + parseFloat(this.state.display.replaceAll(',', ''))).toString());
                this.setState({
                    num1: result,
                    num2: this.state.display,
                    display: result
                });
            } else {
                let result = this.formatDisplay((parseFloat(this.state.display.replaceAll(',', '')) + parseFloat(this.state.num2.replaceAll(',', ''))).toString());
                this.setState({
                    num1: result,
                    display: result
                });
            }
        } else if (this.state.opperator === "-") {
            if (this.state.num2 === null) {
                let result = this.formatDisplay((parseFloat(this.state.num1.replaceAll(',', '')) - parseFloat(this.state.display.replaceAll(',', ''))).toString());
                this.setState({
                    num1: result,
                    num2: this.state.display,
                    display: result
                });
            } else {
                let result = this.formatDisplay((parseFloat(this.state.display.replaceAll(',', '')) - parseFloat(this.state.num2.replaceAll(',', ''))).toString());
                this.setState({
                    num1: result,
                    display: result
                });
            }
        } else if (this.state.opperator === "x") {
            if (this.state.num2 === null) {
                let result = this.formatDisplay((parseFloat(this.state.num1.replaceAll(',', '')) * parseFloat(this.state.display.replaceAll(',', ''))).toString());
                this.setState({
                    num1: result,
                    num2: this.state.display,
                    display: result
                });
            } else {
                let result = this.formatDisplay((parseFloat(this.state.display.replaceAll(',', '')) * parseFloat(this.state.num2.replaceAll(',', ''))).toString());
                this.setState({
                    num1: result,
                    display: result
                });
            }
        } else if (this.state.opperator === "/") {
            if (this.state.num2 === null) {
                let result = this.formatDisplay((parseFloat(this.state.num1.replaceAll(',', '')) / parseFloat(this.state.display.replaceAll(',', ''))).toString());
                this.setState({
                    num1: result,
                    num2: this.state.display,
                    display: result
                });
            } else {
                let result = this.formatDisplay((parseFloat(this.state.display.replaceAll(',', '')) / parseFloat(this.state.num2.replaceAll(',', ''))).toString());
                this.setState({
                    num1: result,
                    display: result
                });
            }
        }
    }

    reset = () => {
        this.setState({
            display: "0",
            num1: null,
            opperator: ""
        });
    }

    del = () => {
        if (this.state.display.length === 1) {
            this.setState({
                display: "0"
            });
        } else {
            this.setState({
                display: this.formatDisplay(this.state.display.slice(0, -1))
            });
        }
    }

    dot = () => {
        this.setState({
            display: this.state.display + "."
        });
    }

    formatDisplay = (num) => {
        var str = num.replaceAll(',', '').split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
    }

    countNumerals = (num) => {
        let digitsArr = num.match(/\d+/g);
        if (digitsArr) {
            return digitsArr.join("").length;
        }
        return 0;
    }

    render() {
        return (
            <div id="calculator">
                <h1>calc</h1>
                <div className="theme">
                    <div className="theme-upper">
                        <h2 className="theme-number">1</h2><h2 className="theme-number">2</h2><h2 className="theme-number">3</h2>
                    </div>
                    <div className="theme-lower">
                        <h2 className="theme-title">THEME</h2><div className="slider"><div class="dot"></div><div className="dot"></div><div className="dot"></div></div>
                    </div>
                </div>
                <div className="screen">
                    <p className="display">{ this.state.display }</p>
                </div>
                <div className="pad">
                    <div className="row">
                        <div className="button number" onClick={() => { this.numberPress("7"); }}>7</div>
                        <div className="button number" onClick={() => { this.numberPress("8"); }}>8</div>
                        <div className="button number" onClick={() => { this.numberPress("9"); }}>9</div>
                        <div className="button blue" onClick={() => { this.del(); }}>DEL</div>
                    </div>
                    <div className="row">
                        <div className="button number" onClick={() => { this.numberPress("4"); }}>4</div>
                        <div className="button number" onClick={() => { this.numberPress("5"); }}>5</div>
                        <div className="button number" onClick={() => { this.numberPress("6"); }}>6</div>
                        <div className="button" onClick={() => { this.opperatorPress("+"); }}>+</div>
                    </div>
                    <div className="row">
                        <div className="button number" onClick={() => { this.numberPress("1"); }}>1</div>
                        <div className="button number" onClick={() => { this.numberPress("2"); }}>2</div>
                        <div className="button number" onClick={() => { this.numberPress("3"); }}>3</div>
                        <div className="button" onClick={() => { this.opperatorPress("-"); }}>-</div>
                    </div>
                    <div className="row">
                        <div className="button" onClick={() => { this.dot(); }}>.</div>
                        <div className="button number" onClick={() => { this.numberPress("0"); }}>0</div>
                        <div className="button" onClick={() => { this.opperatorPress("/"); }}>/</div>
                        <div className="button" onClick={() => { this.opperatorPress("x"); }}>x</div>
                    </div>
                    <div className="row">
                        <div className="button wide blue" onClick={() => { this.reset(); }}>RESET</div>
                        <div className="button wide red" onClick={() => { this.equal(); }}>=</div>
                    </div>
                </div>
            </div>    
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)