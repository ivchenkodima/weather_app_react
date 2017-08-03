import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather, fetchForecast } from '../../actions/index';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const input = this.refs.city;
		if (!input.value.trim()) return;

		this.props.onFetchForecast(input.value);
		this.props.onFetchWeather(input.value);
		input.value = '';
	}

	render() {
		return (
			<form className="Search" onSubmit={this.handleSubmit}>
				<input className="Search__input" placeholder="Search city" ref="city" />
			</form>
		);
	}
}

Search = connect(
	null,
	dispatch => ({
		onFetchWeather: city => dispatch(fetchWeather(`q=${city}`)),
		onFetchForecast: city => dispatch(fetchForecast(`q=${city}`)),
	}))(Search);

export default Search;
