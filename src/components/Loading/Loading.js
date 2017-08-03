import React from 'react';

class Loading extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dots: '',
		};
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			const dots = this.state.dots;

			this.setState({
				dots: dots.length >= 4 ? '' : `${dots}.`,
			});
		}, 100);
	}


	render() {
		return (
			<span>{`Getting weather from your current position ${this.state.dots}`}</span>
		);
	}
}

export default Loading;
