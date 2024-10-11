export default async (location) => {
  const apiKey = process.env.VISUAL_CROSSING_API_KEY;
  const apiUrl =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

  const url = `${apiUrl}/${encodeURIComponent(location)}?key=${apiKey}`;

  try {
    const response = await fetch(url);

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

    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
  }
};
