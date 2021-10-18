import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    state = {
        theme: 1,
        display: "399,981"
    };

    render() {
        return (
            <div id="calculator">
                <h1>calc</h1>
                <div class="theme">
                    <h2>THEME</h2><h2>1</h2><h2>2</h2><h2>3</h2>
                </div>
                <div class="screen">
                    <p class="display">{ this.state.display }</p>
                </div>
                <div class="pad">
                    <div class="row">
                        <button class="button number">7</button>
                        <button class="button number">8</button>
                        <button class="button number">9</button>
                        <button class="button blue">DEL</button>
                    </div>
                    <div class="row">
                        <button class="button number">4</button>
                        <button class="button number">5</button>
                        <button class="button number">6</button>
                        <button class="button">+</button>
                    </div>
                    <div class="row">
                        <button class="button number">1</button>
                        <button class="button number">2</button>
                        <button class="button number">3</button>
                        <button class="button">-</button>
                    </div>
                    <div class="row">
                        <button class="button">.</button>
                        <button class="button number">0</button>
                        <button class="button">/</button>
                        <button class="button">x</button>
                    </div>
                    <div class="row">
                        <button class="button wide blue">RESET</button>
                        <button class="button wide red">=</button>
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