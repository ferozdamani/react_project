import React from 'react';
import {render} from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
} from 'react-router-dom';
import '../assets/index.scss';
import '../assets/movieSearch.scss';
import {Header} from './header.jsx';
import {Home} from './home.jsx';
import {Bio} from './bio.jsx';
import {MovieBox} from './movieSearch.jsx';
import {Contact} from './contact.jsx';


class Navigation extends React.Component {
	render () {
		return (
			<nav className="navContainer">
				<Link to="/home" className="navItem" href="#"><i className="fas fa-home iconSpacer"></i>Home</Link>
				<Link to="/bio" className="navItem" href="#"><i className="fas fa-user-tie iconSpacer"></i>About Me</Link>
				<Link to="/movieBox" className="navItem" href="#"><i className="fas fa-film iconSpacer"></i>Movie Search</Link>
				<Link to="/contact" className="navItem" href="#">Contact Me</Link>
			</nav>
		);
	}
}

class Main extends React.Component {
	render () {
		return (
			<div className="bodyContainer">
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/bio" component={Bio} />
					<Route path="/movieBox" component={MovieBox} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</div>
		);
	}
}

class App extends React.Component {
	render () {
		return (
			<Router>
				<div className="appContainer">
					<Header />
					<Navigation />
					<Main />
				</div>
			</Router>
		);
	}
}

// =============================================

render(
	<App />,
	document.getElementById('app')
);
