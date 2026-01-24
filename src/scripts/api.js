/**
 * Weather API Module
 * Handles all API calls to OpenWeatherMap
 */

// Configuration
const API_KEY = 'YOUR_API_KEY';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

/**
 * Fetch current weather data for a given city
 * @param {string} city - The city name to fetch weather for
 * @returns {Promise<Object>} - Promise resolving to weather data JSON
 */
function getWeatherByCity(city) {
  if (!city || typeof city !== 'string') {
    return Promise.reject(new Error('City parameter must be a non-empty string'));
  }

  const url = `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Weather API Error: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Failed to fetch weather data:', error.message);
      throw error;
    });
}

/**
 * Fetch 5-day forecast for a given city
 * @param {string} city - The city name to fetch forecast for
 * @returns {Promise<Object>} - Promise resolving to forecast data JSON
 */
function getForecastByCity(city) {
  if (!city || typeof city !== 'string') {
    return Promise.reject(new Error('City parameter must be a non-empty string'));
  }

  const url = `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Forecast API Error: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Failed to fetch forecast data:', error.message);
      throw error;
    });
}

/**
 * Fetch weather data by latitude and longitude
 * @param {number} lat - Latitude coordinate
 * @param {number} lon - Longitude coordinate
 * @returns {Promise<Object>} - Promise resolving to weather data JSON
 */
function getWeatherByCoords(lat, lon) {
  if (typeof lat !== 'number' || typeof lon !== 'number') {
    return Promise.reject(new Error('Latitude and longitude must be numbers'));
  }

  const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Weather API Error: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Failed to fetch weather data by coordinates:', error.message);
      throw error;
    });
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getWeatherByCity,
    getForecastByCity,
    getWeatherByCoords
  };
}
