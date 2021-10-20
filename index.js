import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    state = {
        theme: 1,
        display: "0"
    };

    numberPress = (num) => {
        let oldDisplay = this.state.display;
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

    reset = () => {
        this.setState({
            display: "0"
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

    formatDisplay = (num) => {
        var str = num.replaceAll(',', '').split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
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
                        <div className="button">+</div>
                    </div>
                    <div className="row">
                        <div className="button number" onClick={() => { this.numberPress("1"); }}>1</div>
                        <div className="button number" onClick={() => { this.numberPress("2"); }}>2</div>
                        <div className="button number" onClick={() => { this.numberPress("3"); }}>3</div>
                        <div className="button">-</div>
                    </div>
                    <div className="row">
                        <div className="button">.</div>
                        <div className="button number" onClick={() => { this.numberPress("0"); }}>0</div>
                        <div className="button">/</div>
                        <div className="button">x</div>
                    </div>
                    <div className="row">
                        <div className="button wide blue" onClick={() => { this.reset(); }}>RESET</div>
                        <div className="button wide red">=</div>
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