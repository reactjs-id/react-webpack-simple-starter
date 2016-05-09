import React, { Component } from 'react';
import { render } from 'react-dom';
var styles = require('./style/main.css');

class App extends Component {
    render() {
        return (
            <div className="card">
                <h1>Halo!</h1>
                <p>Selamat belajar ReactJS</p>
            </div>
        );
    }
};

const app = document.createElement('div');
document.body.appendChild(app); 
render(<App />, app);