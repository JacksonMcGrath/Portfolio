import React, {Component} from 'react';

class Contact extends Component {

	constructor(){
		super()
	
		this.state = {
	
		}
	}

	render(){

		return (
			<div className="contact">
				<div className="hero-main-full about-banner">
					<div className="left-half">
						<div className="buffer-1"></div>
						<div className="buffer-1"></div>
						<h2 className="title bold white-text">Contact Me</h2>
					</div>
					<div className="right-half">
						<div className="buffer-1"></div>
						<div className="buffer-1"></div>
						<div className="buffer-1"></div>
						<p className="contact-info"><span className="bold">Phone:</span> 630-460-1938</p>
						<p className="contact-info"><span className="bold">Email:</span> jacksonfmcgrath@gmail.com</p>
						<a className="big-link-white" href="https://www.linkedin.com/in/jackson-mcgrath/">LinkedIn</a>
						<div className="buffer-1"></div>
						<a className="big-link-white" href="https://github.com/JacksonMcGrath">GitHub</a>
						<div className="buffer-1"></div>
						<a className="big-link-white" href="https://github.com/JacksonMcGrath"></a>
					</div>
				</div>
			</div>
		)
	}
}



export default Contact;