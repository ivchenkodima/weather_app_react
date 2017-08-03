
export const dateToString = (date, multiplier = 1) =>
  new Date(date * multiplier).toDateString();

export const formatData = (forecast, type) => {
  console.log('forecast', forecast);
  if (type === 'week') {
    let nextDay = dateToString(forecast[0].dt, 1000);
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const days = forecast
      .filter((day, i) => {
        let prevDay = nextDay;
        const dateString = dateToString(day.dt, 1000);
        nextDay = dateString;
        return dateString.indexOf(prevDay) < 0 || i === 0;
      })
      .map((day) => {
        day.temp = day.main.temp;
        day.dayName = dayNames[new Date(day.dt * 1000).getDay()];
        return day;
      });

    return days;
  } else if (type === 'day') {
    console.log('day');
  }
};
