export default async (location) => {
  const apiKey = "VVW2X3JXPFFNWV7CTNJX98KAP"; // Replace with your actual API key
  const apiUrl =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
  const url = `${apiUrl}/${encodeURIComponent(location)}?key=${apiKey}`;

  // Fetch with timeout function (5 seconds)
  const fetchWithTimeout = async (url, timeout = 5000) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    try {
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  };

  try {
    const response = await fetchWithTimeout(url);
    if (!response.ok) {
      const errorMessages = {
        400: "Invalid parameter or API format.",
        401: "API key issue or access restriction.",
        404: "Endpoint not found.",
        429: "API request limit exceeded.",
        500: "Server error occurred.",
      };
      const message = errorMessages[response.status] || "An error occurred.";
      throw new Error(`${response.status}: ${message}`);
    }

    // Parse the weather data
    const data = await response.json();
    console.log(data);
    return {
      success: true,
      weatherData: data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};
