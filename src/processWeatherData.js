export default (data) => {
  const NO_WEATHER_DATA_ICON = "no_weather_data";

  if (!data || !data.currentConditions) {
    throw new Error("Invalid data structure");
  }

  // Get current day weather
  const currentConditions = {
    temperature: data.currentConditions.temp,
    humidity: data.currentConditions.humidity,
    description: data.currentConditions.conditions,
    forecastSummary: data.description,
    icon: data.currentConditions.icon ?? NO_WEATHER_DATA_ICON,
  };

  return {
    location: data.resolvedAddress,
    temperature: currentConditions.temperature,
    description: currentConditions.description,
    weatherIcon: currentConditions.icon,
    forecastSummary: data.description,
  };
};
