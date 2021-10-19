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
                    <div class="theme-upper">
                        <h2 class="theme-number">1</h2><h2 class="theme-number">2</h2><h2 class="theme-number">3</h2>
                    </div>
                    <div class="theme-lower">
                        <h2 class="theme-title">THEME</h2><div className="slider"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
                    </div>
                </div>
                <div class="screen">
                    <p class="display">{ this.state.display }</p>
                </div>
                <div class="pad">
                    <div class="row">
                        <div class="button number">7</div>
                        <div class="button number">8</div>
                        <div class="button number">9</div>
                        <div class="button blue">DEL</div>
                    </div>
                    <div class="row">
                        <div class="button number">4</div>
                        <div class="button number">5</div>
                        <div class="button number">6</div>
                        <div class="button">+</div>
                    </div>
                    <div class="row">
                        <div class="button number">1</div>
                        <div class="button number">2</div>
                        <div class="button number">3</div>
                        <div class="button">-</div>
                    </div>
                    <div class="row">
                        <div class="button">.</div>
                        <div class="button number">0</div>
                        <div class="button">/</div>
                        <div class="button">x</div>
                    </div>
                    <div class="row">
                        <div class="button wide blue">RESET</div>
                        <div class="button wide red">=</div>
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