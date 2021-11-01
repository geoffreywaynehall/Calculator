import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    state = {
        theme: 1,
        display: "0",
        leftNum: null,
        rightNum: null,
        opperator: "",
        result: false,
        justOpperated: false
    };

    numberPress = (num) => {
        if (this.state.result) {
            this.setState({
                display: num,
                result: false,
                leftNum: null,
                rightNum: null,
                justOpperated: false
            });
        } else {
            let oldDisplay = this.state.display;
            if (this.countNumerals(oldDisplay) < 16) {
                if (oldDisplay === "0" || this.state.justOpperated) {
                    this.setState({
                        display: num,
                        rightNum: null,
                        result: false,
                        justOpperated: false
                    });
                } else {
                    this.setState({
                        display: this.formatDisplay(oldDisplay + num),
                        result: false,
                        justOpperated: false
                    });
                }
            }
        }
    }

    opperatorPress = (op) => {
        console.log(this.state);
        if (!this.state.result && this.state.leftNum !== null && this.state.justOpperated === false) {
            this.equal(true);
            this.setState({
                opperator: op,
                justOpperated: true,
                result: false
            });
        }
        else if (!this.state.justOpperated) {
            this.setState({
                opperator: op,
                leftNum: this.state.display,
                justOpperated: true,
                result: false
            });
        } else {
            this.setState({
                opperator: op
            });
        }
    }

    equal = (fromOp = false) => {
        if (this.state.opperator === "+") {
            if (this.state.rightNum === null) {
                let result = this.formatDisplay((parseFloat(this.state.leftNum.replaceAll(',', '')) + parseFloat(this.state.display.replaceAll(',', ''))).toString());
                this.setState({
                    leftNum: result,
                    rightNum: this.state.display,
                    display: result,
                    result: true,
                    justOpperated: fromOp
                });
            } else {
                let result = this.formatDisplay((parseFloat(this.state.display.replaceAll(',', '')) + parseFloat(this.state.rightNum.replaceAll(',', ''))).toString());
                this.setState({
                    leftNum: result,
                    display: result,
                    result: true,
                    justOpperated: fromOp
                });
            }
        } else if (this.state.opperator === "-") {
            if (this.state.rightNum === null) {
                let result = this.formatDisplay((parseFloat(this.state.leftNum.replaceAll(',', '')) - parseFloat(this.state.display.replaceAll(',', ''))).toString());
                this.setState({
                    leftNum: result,
                    rightNum: this.state.display,
                    display: result,
                    result: true,
                    justOpperated: fromOp
                });
            } else {
                let result = this.formatDisplay((parseFloat(this.state.display.replaceAll(',', '')) - parseFloat(this.state.rightNum.replaceAll(',', ''))).toString());
                this.setState({
                    leftNum: result,
                    display: result,
                    result: true,
                    justOpperated: fromOp
                });
            }
        } else if (this.state.opperator === "x") {
            if (this.state.rightNum === null) {
                let result = this.formatDisplay((parseFloat(this.state.leftNum.replaceAll(',', '')) * parseFloat(this.state.display.replaceAll(',', ''))).toString());
                this.setState({
                    leftNum: result,
                    rightNum: this.state.display,
                    display: result,
                    result: true,
                    justOpperated: fromOp
                });
            } else {
                let result = this.formatDisplay((parseFloat(this.state.display.replaceAll(',', '')) * parseFloat(this.state.rightNum.replaceAll(',', ''))).toString());
                this.setState({
                    leftNum: result,
                    display: result,
                    result: true,
                    justOpperated: fromOp
                });
            }
        } else if (this.state.opperator === "/") {
            if (this.state.rightNum === null) {
                let result = this.formatDisplay((parseFloat(this.state.leftNum.replaceAll(',', '')) / parseFloat(this.state.display.replaceAll(',', ''))).toString());
                this.setState({
                    leftNum: result,
                    rightNum: this.state.display,
                    display: result,
                    result: true,
                    justOpperated: fromOp
                });
            } else {
                let result = this.formatDisplay((parseFloat(this.state.display.replaceAll(',', '')) / parseFloat(this.state.rightNum.replaceAll(',', ''))).toString());
                this.setState({
                    leftNum: result,
                    display: result,
                    result: true,
                    justOpperated: fromOp
                });
            }
        }
    }

    reset = () => {
        this.setState({
            display: "0",
            leftNum: null,
            rightNum: null,
            opperator: "",
            result: false,
            justOpperated: false
        });
    }

    del = () => {
        if (!this.state.justOpperated && !this.state.result) {
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
    }

    dot = () => {
        if (!this.state.justOpperated && !this.state.result) {
            this.setState({
                display: this.state.display + "."
            });
        } else {
            this.setState({
                display: "0."
            });
        }
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