import React, { Component } from "react";

export default class App extends Component {
	constructor(props) {
		this.state = {
			windowWidth: window.innerWidth,
		};
	}

	componentDidMount() {
		// Lifecycle func - when component mounts/loads
		console.log("The app component loaded")
	}

	componentDidUpdate(prevProps) {
		// Lifecycle func - when component props change
	}

	componentWillUnmount() {
		// Lifecycle func - when component unmounts/cleanup function
	}

	render() {
		return (
			<div className="app">
				<center>
					<h1>The UseEffect Hook</h1>
					<h2>The window width is: {windowWidth}</h2>
				</center>
			</div>
		);
	}
}