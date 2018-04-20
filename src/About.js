import React, {Component} from 'react';

class About extends Component {

	constructor(){
		super()
	
		this.state = {
	
		}
	}

	render(){

		return (
			<div className="about">
				<div className="hero-main">
					<div className="left-half">
						<img className="app-shot" src="https://i.imgur.com/9TUWrCW.png"/>
					</div>
					<div className="right-half">
						<h2 className="app-title">Jackson Mcgrath</h2>
						<h4 className="sub-heading">Web Developer  |  Graphic Designer</h4> 
						<a className="link" href="https://www.linkedin.com/in/jackson-mcgrath/">Connect with me on LinkedIn</a>
						<button className="hero-more-btn" onClick={this.goToProjects}>View My Projects</button>
					</div>
				</div>
				<div className="hero-skinny">
					<h2></h2>
				</div>
			</div>
		)
	}
}



export default About;