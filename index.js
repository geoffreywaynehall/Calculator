import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    state = {
        theme: 1
    };

    render() {
        return (
            <div id="calculator">
                <h1>calc</h1>
                <div class="theme">
                    <h2>THEME</h2><h2>1</h2><h2>2</h2><h2>3</h2>
                </div>
                <div class="screen"></div>
                <div class="pad"></div>
            </div>    
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)