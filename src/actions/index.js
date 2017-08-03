import fetch from 'isomorphic-fetch';
// import { key as APP_ID } from '../../config';

const APP_ID = 'f61119db4f9f092afb4ddfd327abf2ba';

const BASE_URL = 'http://api.openweathermap.org/data/2.5';

export const REQUEST_FORECAST = 'REQUEST_FORECAST';
export const RECEIVE_FORECAST_SUCCESS = 'RECEIVE_FORECAST_SUCCESS';
export const REQUEST_FORECAST_FAILED = 'REQUEST_FORECAST_FAILED';

export function requestForecast() {
	return {
		type: REQUEST_FORECAST
	};
}


export function requestForecastFailed(error) {
	return {
		type: REQUEST_FORECAST_FAILED,
		error
	};
}

export function receiveForecastSuccess(json) {
	return {
		type: RECEIVE_FORECAST_SUCCESS,
		payload: {
			json
		}
	};
}

export function fetchForecast(params) {
	const url = `${BASE_URL}/forecast?${params}&units=metric&appid=${APP_ID}`;

	return function (dispatch) {
		dispatch(requestForecast());

		return fetch(url)
			.then(response => response.json())
			.then(json => dispatch(receiveForecastSuccess(json)))
			.catch(error => {
				console.log('error happened: ', error);
				dispatch(requestForecastFailed(error.toString()));
			});
	};
}

export const REQUEST_LOCATION = 'REQUEST_LOCATION';
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';

export function requestLocation() {
	return {
		type: REQUEST_LOCATION
	};
}

export function receiveLocation(location) {
	return {
		type: RECEIVE_LOCATION,
		payload: {
			location
		}
	};
}

export function fetchLocation() {
	return function (dispatch) {

		if (navigator.geolocation) {
			dispatch(requestLocation());
			navigator.geolocation.getCurrentPosition(success, error);
		} else {
			console.log('navigator.geolocation not supported.');
		}

		function success(position) {
			const { latitude, longitude } = position.coords;
			dispatch(receiveLocation({ latitude, longitude }));
		}

		function error(error) {
			console.error(error);
		}
	};
}
