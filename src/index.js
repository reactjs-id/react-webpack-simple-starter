import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Halo Dunia!</h1>
                <p>Selamat belajar ReactJS</p>
            </div>
        );
    }
};

const app = document.createElement('div');
document.body.appendChild(app); 
render(<App />, app);