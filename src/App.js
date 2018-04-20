import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// --- COMPONEENTS ---
import Home from './Home';
import Projects from './Projects';
import Graphics from './Graphics';
import About from './About';
import Contact from './Contact';



class App extends Component {

    constructor(){
        super()

        this.state = {
            render: 'Home',
        }

        this.toggleHome = this.toggleHome.bind(this)
        this.toggleProjects = this.toggleProjects.bind(this)
        this.toggleGraphics = this.toggleGraphics.bind(this)
        this.toggleAbout = this.toggleAbout.bind(this)
        this.toggleContact = this.toggleContact.bind(this)
    }

    toggleHome = () => {
        const render = this.state.render
        this.setState({
            render: 'Home'
        })
    }

    toggleProjects = () => {
        const render = this.state.render
        this.setState({
            render: 'Projects'
        })
    }

    toggleGraphics = () => {
        const render = this.state.render
        this.setState({
            render: 'Graphics'
        })
    }

    toggleAbout = () => {
        const render = this.state.render
        this.setState({
            render: 'About'
        })
    }

    toggleContact = () => {
        const render = this.state.render
        this.setState({
            render: 'Contact'
        })
    }

    render() {
        return (
            <div className="App">
                <header>
                    {this.state.render == 'Home' &&
                    <div className="logo-container">
                        <h1 class="title">Jackson</h1>
                        <img className="logo" src="https://i.imgur.com/yf33Phb.png"/>
                        <h1 class="title bold">McGrath</h1>
                    </div>
                    }
                    {this.state.render == 'Home' && 
                    <nav className="sticky-nav">
                        <button className="main-nav" onClick={this.toggleHome}>Home</button>
                        <button className="main-nav" onClick={this.toggleProjects}>Projects</button>
                        <button className="main-nav" onClick={this.toggleGraphics}>Graphic Design</button>
                        <button className="main-nav" onClick={this.toggleAbout}>About Me</button>
                        <button className="main-nav" onClick={this.toggleContact}>Contact Me</button>
                    </nav>
                    }
                    {this.state.render != 'Home' && 
                    <nav className="sticky-nav"> 
                        <img onClick={this.toggleHome} className="logo-small" src="https://i.imgur.com/yf33Phb.png"/>
                        <button className="main-nav buffer" onClick={this.toggleHome}>Home</button>
                        <button className="main-nav buffer" onClick={this.toggleProjects}>Projects</button>
                        <button className="main-nav buffer" onClick={this.toggleGraphics}>Graphic Design</button>
                        <button className="main-nav buffer" onClick={this.toggleAbout}>About Me</button>
                        <button className="main-nav buffer" onClick={this.toggleContact}>Contact Me</button>
                    </nav>
                    }
                </header>
                {this.state.render == 'Home' && <Home projects={this.toggleProjects} about={this.toggleAbout}/>}
                {this.state.render == 'Projects' && <Projects/>}
                {this.state.render == 'Graphics' && <Graphics/>}
                {this.state.render == 'About' && <About/>}
                {this.state.render == 'Contact' && <Contact/>}
            </div>
        );
    }
}

export default App;
