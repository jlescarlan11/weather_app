export default (weather) => {
  const weatherDiv = document.getElementById("weather-info");

  const iconUrl = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/refs/heads/main/SVG/4th%20Set%20-%20Color/${weather.weatherIcon}.svg`;

  // Assuming weather.weatherIcon gives you the correct icon name, like 'cloudy' or 'sunny'
  weatherDiv.innerHTML = `
      <div>
        <h2>${weather.location}</h2>
        <div style="display: flex; align-items: center; justify-content: center;">
          <img src="${iconUrl}" alt="weather-icon" style="width: 60px; height: 60px; margin-right: 15px;">
          <span style="font-size: 2rem;">${weather.temperature}°C</span>
        </div>
        <p>${weather.description}</p>
        <p>${weather.forecastSummary}</p>
      </div>
    `;
};
