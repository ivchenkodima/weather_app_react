import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchForecast } from '../../actions/index';
import WeatherForecast from '../../components/WeatherForecast/WeatherForecast';
import Loading from '../../components/Loading';
import Selector from '../../components/Selector';

class Weather extends React.Component {
	componentWillUpdate(nextProps, nextState) {
		if (this.props.location !== nextProps.location) {
			const { latitude, longitude } = nextProps.location.data;
			this.updateWeather(`lat=${latitude}&lon=${longitude}`);
		}
	}

	updateWeather(params) {
		this.props.onfetchForecast(params);
	}

	render() {
		const { isFetching, weather, onfetchForecast } = this.props;
		console.log('weather', weather);

		if (weather.error) {
			return (
				<p>Failed to get data: {weather.error}</p>
			);
		}
		if (!weather.forecast || isFetching) {
			return (
				<Loading />
			);
		}

		return (
			<div className="Weather">
				<h2 className="WeatherCity">{weather.forecast.city.name}</h2>
				<h2>{weather.forecast.list[0].temp}<sup>&#8451;</sup></h2>
				<Selector onSelect={(v) => { console.log(v); return this.updateWeather(v)}} />
				<WeatherForecast forecast={weather.forecast.list} type="week" />
			</div>
		);
	}
}

Weather = connect(
	state => ({
		location: state.location,
		weather: state.weather,
	}),
	dispatch => ({
		onfetchForecast: params => dispatch(fetchForecast(params)),
	}))(Weather);

export default Weather;
