import React, { PropTypes } from 'react';
import { formatData } from '../../helpers/date';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const WeatherForecast = ({ forecast, type = 'week' }) => (
	<div className="WeatherForecast">
		<ResponsiveContainer className="WeatherForecastChart">
			{
				// type === 'month' && <LineChart data={formatData(forecast, type)}>
				// 	<XAxis dataKey="dayNumber" />
				// 	<YAxis />
				// 	<Tooltip />
				// 	<Line type="monotone" dataKey="temp" stroke="#8884d8" strokeWidth={2} />
				// </LineChart>
			}
      {
				type === 'week' && <LineChart data={formatData(forecast, type)}>
					<XAxis dataKey="dayName" />
					<YAxis />
					<Tooltip />
					<Line type="monotone" dataKey="temp" stroke="#8884d8" strokeWidth={2} />
				</LineChart>
      }
      {
        // type === 'day' && <LineChart data={formatData(forecast, type)}>
				// 	<XAxis dataKey="dayHours" />
				// 	<YAxis />
				// 	<Tooltip />
				// 	<Line type="monotone" dataKey="temp" stroke="#8884d8" strokeWidth={2} />
				// </LineChart>
      }
		</ResponsiveContainer>
	</div>
);

WeatherForecast.propTypes = {
	forecast: PropTypes.array.isRequired,
	type: PropTypes.string.isRequired,
};

export default WeatherForecast;
