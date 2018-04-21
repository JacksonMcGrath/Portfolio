import React, {Component} from 'react';

class Projects extends Component {

	constructor(){
		super()
	
		this.state = {
	
		}
	}

	goToProjects = () => {
		console.log('goToProjects was hit');
		this.props.projects()
	}

	render(){

		return (
			<div className="projects">
				<div className="buffer-1"></div>
				<div className="hero-main afya">
					<div className="left-half">
						<img className="app-shot" src="https://i.imgur.com/9TUWrCW.png"/>
					</div>
					<div className="right-half">
						<h2 className="app-title">Afya Bars</h2>
						<h4 className="sub-heading">Create your own custom granola bar.</h4> 
						<a className="link" href="https://afya-bars.herokuapp.com/">visit the app</a>
					</div>
				</div>
				<div className="buffer-1"></div>
				<div className="hero-main beat">
					<div className="left-half">
						<img className="app-shot" src="https://i.imgur.com/rcNztYT.png"/>
					</div>
					<div className="right-half">
						<h2 className="app-title white-text">Beat Pad Hero</h2>
						<h4 className="sub-heading white-text">Play a virtual beat pad and test your skills.</h4> 
						<a className="link-white" href="https://beat-hero.herokuapp.com/">visit the app</a>
					</div>
				</div>
				<div className="buffer-1"></div>
				<div className="hero-main eatery">
					<div className="left-half">
						<img className="app-shot" src="https://i.imgur.com/jrNkZ4i.png"/>
					</div>
					<div className="right-half">
						<h2 className="app-title">Eatery App</h2>
						<h4 className="sub-heading">Let us help you narrow down your restaurant choices</h4> 
						<a className="link" href="https://eatery-app.herokuapp.com/">visit the app</a>
					</div>
				</div>
				<div className="buffer-1"></div>
				<div className="hero-main deepr">
					<div className="left-half">
						<img className="app-shot" src="https://i.imgur.com/xMPheJH.png"/>
					</div>
					<div className="right-half">
						<h2 className="app-title white-text">DEEPR App</h2>
						<h4 className="sub-heading white-text">Join the conversation and access deepr levels of thought.</h4> 
						<a className="link-white" href="https://deepr-app.herokuapp.com/home">visit the app</a>
					</div>
				</div>
				<div className="buffer-1"></div>
			</div>
		)
	}
}



export default Projects;