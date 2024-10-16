import "./styles.css";
import getWeatherAPI from "./getWeatherAPI.js";
import processWeatherData from "./processWeatherData.js";
import displayWeather from "./displayWeather.js";

document
  .getElementById("location-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const location = document.getElementById("location").value;
    document.getElementById("loading").style.display = "block";
    document.getElementById("weather-info").innerHTML = "";

    const apiResponse = await getWeatherAPI(location);

    if (apiResponse.success) {
      const processedData = processWeatherData(apiResponse.weatherData);
      displayWeather(processedData);
    } else {
      console.error("Error fetching weather data:", apiResponse.error);
      document.getElementById(
        "weather-info"
      ).innerHTML = `<p>Error: ${apiResponse.error}</p>`;
    }

    document.getElementById("loading").style.display = "none";
  });
