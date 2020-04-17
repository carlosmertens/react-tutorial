import React from 'react'

class Clock extends React.Component {
	// Create constructor
	constructor (props) {
		super(props);
		this.state = { date: new Date() };
	}

	// Lifecycle methods
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	// Create method to be called every second
	tick() {
		this.setState({ date: new Date() });
	}

	// Render the component output
	render() {
		return (
			<div>
				<h5>Local time: { this.state.date.toLocaleTimeString() }.</h5>
			</div>
		);
	}
}

/* ReactDOM.render(
	<Clock />,
	document.getElementById('root')
); */

//setInterval(tick, 1000);

/* setInterval(() => {
	tick()
}, 1000); */

export default Clock
