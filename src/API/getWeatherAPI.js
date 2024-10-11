export default async (location) => {
  const apiKey = "VVW2X3JXPFFNWV7CTNJX98KAP";
  const apiUrl =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

  const url = `${apiUrl}/${encodeURIComponent(location)}?key=${apiKey}`; // Encode location to handle spaces/special characters

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
