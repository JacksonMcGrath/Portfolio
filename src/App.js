import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(){
        super()

        this.state = {
          
        }
    }

    render() {
        return (
            <div className="App">
                <header>
                    <h1 className="title">Jackson <span className="bold">McGrath</span></h1>
                    <nav> 
                        <button>Home</button>
                        <button>Projects</button>
                        <button>About Me</button>
                        <button>Contact Me</button>
                    </nav>
                </header>
                <div className="main">
                    <p className="brand-statement">
                        
                    </p>
                </div>
            </div>
        );
    }
}

export default App;
