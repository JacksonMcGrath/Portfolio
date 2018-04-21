import React, {Component} from 'react';

class About extends Component {

	constructor(props){
		super(props)
	
		this.state = {
	
		}

		this.goToProjects = this.goToProjects.bind(this)
		this.goToContact = this.goToContact.bind(this)
	}

	goToProjects = () => {
		console.log('goToProjects was hit');
		this.props.projects()
	}

	goToContact = () => {
		console.log('goToContact was hit');
		this.props.contact()
	}

	render(){

		return (
			<div className="about">
				<div className="hero-main about-banner">
					<div className="left-half">
						<img className="headshot" src="https://i.imgur.com/Gd6aYjL.png"/>
					</div>
					<div className="right-half">
						<h1 class="about-name">Jackson <span class="about-name bold">McGrath</span></h1>
						<h4 className="sub-heading white-text">Web Developer  |  Graphic Designer</h4> 
						<a className="link-white" href="https://www.linkedin.com/in/jackson-mcgrath/">Connect with me on LinkedIn</a>
						<button className="hero-more-btn-about" onClick={this.goToProjects}>View My Projects</button>
					</div>
				</div>
				<h2 className="quote">I am driven by finding new ways of being creative and uncovering innovative ways to solve problems. By understanding the principles of design, through my studies of graphic design, I strive to create compelling and clear web designs with composition and usability in mind. I use my creative process to optimize my approach to web development and am driven to continue tinkering with new ways of creating user-focused solutions.</h2>
				<div className="buffer-1"></div>
				<div className="buffer-1"></div>
				<div className="buffer-1"></div>
				<div className="buffer-1"></div>
				<div className="buffer-1"></div>
				<div className="buffer-1"></div>
				<h2 className="title minus">Skills</h2>
				<div className="hero-main skills">
					<div className="left-half">
						<h3 className="sub-title">Front-End</h3>
						<div class="hero-sub">
							<h4>HTML</h4>
							<h4>CSS</h4>
							<h4>ReactJS</h4>
							<h4>Wordpress</h4>
							<h4>Adobe Creative Suite</h4>
							<h4>jQuery</h4>
						</div>
					</div>
					<img class="logo-float" src="https://i.imgur.com/yf33Phb.png"/>
					<div className="right-half-centered">
						<h3 className="sub-title white-text">Back-End</h3>
						<div class="hero-sub white-text">
							<h4>Express</h4>
							<h4>Node</h4>
							<h4>MongoDB</h4>
							<h4>Firebase</h4>
							<h4>Ruby on Rails</h4>
							<h4>PostgreSQL</h4>
						</div>						
					</div>
				</div>
				<div className="buffer-1"></div>
				<div className="buffer-1"></div>
				<h2 className="title">Learning at General Assembly</h2>
				<h2 className="quote-2">I developed my understanding of object-orientated programming with a range of coding languages including JavaScript, HTML, CSS, Ruby, React, Node, Express, and more. We worked in both solo and group projects to grow our understanding of full-stack development and the nuances of coding as a part of a team.</h2>
				<div className="buffer-1"></div>
				<div className="buffer-1"></div>
				<div className="buffer-1"></div>
				<button className="large-btn" onClick={this.goToContact}>Contact Me</button>
				<div className="buffer-1"></div>
				<div className="buffer-1"></div>
			</div>
		)
	}
}



export default About;