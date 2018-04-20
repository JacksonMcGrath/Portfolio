import React, {Component} from 'react';

class Home extends Component {

	constructor(props){
		super(props)
	
		this.state = {
			
		}

		this.goToProjects = this.goToProjects.bind(this)
	}

	goToProjects = () => {
		console.log('goToProjects was hit');
		this.props.projects()
	}

	render(){

		return (
			<div className="home">
				<div className="buffer-1"></div>
				<div className="hero-main afya blur">
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
								<div className="hero-main afya blur">
					<div className="left-half">
						<img className="app-shot" src="https://i.imgur.com/9TUWrCW.png"/>
					</div>
					<div className="right-half">
						<h2 className="app-title">Beat Pad Hero</h2>
					</div>
				</div>
			</div>
		)
	}
}



export default Home;