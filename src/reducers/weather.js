import {
	REQUEST_FORECAST,
	REQUEST_FORECAST_FAILED,
	RECEIVE_FORECAST_SUCCESS
} from '../actions';

const initialState = {
	isFetching: true
};

export default function weather(state = initialState, action) {
	switch (action.type) {
		case REQUEST_FORECAST:
			return Object.assign({}, state, {
				isFetching: true,
			});
		case REQUEST_FORECAST_FAILED:
			return Object.assign({}, state, {
				isFetching: false,
				error: action.error
			});
		case RECEIVE_FORECAST_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				forecast: action.payload.json
			});
		default:
			return state;
	}
}
