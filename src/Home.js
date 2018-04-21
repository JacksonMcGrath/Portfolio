import React, {Component} from 'react';

class Home extends Component {

	constructor(props){
		super(props)
	
		this.state = {
			
		}

		this.goToProjects = this.goToProjects.bind(this)
		this.goToAbout = this.goToAbout.bind(this)
	}

	goToProjects = () => {
		console.log('goToProjects was hit');
		this.props.projects()
	}

	goToAbout = () => {
		console.log('goToAbout was hit');
		this.props.about()
	}



	render(){

		return (
			<div className="home">
				<div className="buffer-1"></div>
				<div className="hero-main afya">
					<div className="left-half">
						<img className="app-shot" src="https://i.imgur.com/9TUWrCW.png"/>
					</div>
					<div className="right-half">
						<h2 className="app-title">Afya Bars</h2>
						<h4 className="sub-heading">Create your own custom granola bar.</h4> 
						<a className="link" href="https://afya-bars.herokuapp.com/">visit the app</a>
						<button className="hero-more-btn" onClick={this.goToProjects}>More Projects</button>
					</div>
				</div>
				<div className="buffer-1"></div>
				<div className="hero-main about-banner">
					<div className="left-half">
						<img className="headshot" src="https://i.imgur.com/Gd6aYjL.png"/>
					</div>
					<div className="right-half">
						<h1 class="about-name">About Me</h1>
						<h4 className="sub-heading white-text">Web Developer  |  Graphic Designer</h4> 
						<p className="white-text">I love pairing my coding and design skills to build clean, effective web designs.</p>
						<button className="hero-more-btn-learn" onClick={this.goToAbout}>Learn More</button>
					</div>
				</div>
				<div className="buffer-1"></div>
			</div>
		)
	}
}



export default Home;