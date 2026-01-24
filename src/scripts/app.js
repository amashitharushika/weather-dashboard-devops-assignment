/**
 * Weather Dashboard - Main Application Script
 * Handles search functionality and weather data management
 */

// ========== DOM Elements ==========
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');

// ========== Search Handler Function ==========
/**
 * Handles the search form submission
 * Validates input, fetches weather data from API, and logs the result
 * @param {Event} event - The form submission event
 */
function handleSearch(event) {
  event.preventDefault();

  // Get the trimmed input value
  const cityName = cityInput.value.trim();

  // Validate input
  if (cityName === '') {
    alert('Please enter a city name to search.');
    cityInput.focus();
    return;
  }

  console.log('Searching for city:', cityName);

  // Call API to fetch weather data
  getWeatherByCity(cityName)
    .then(data => {
      console.log('Weather data received:', data);
      // TODO: Update UI with weather data
      displayWeather(data);
    })
    .catch(error => {
      console.error('Error fetching weather:', error.message);
      alert('Unable to fetch weather data. Please check the city name and try again.');
    });
}

// ========== Event Listeners ==========
// Add event listener to search button via form submission
if (searchForm) {
  searchForm.addEventListener('submit', handleSearch);
}

// Optional: Add keyboard support for direct button click
if (searchButton) {
  searchButton.addEventListener('click', function(event) {
    event.preventDefault();
    handleSearch(event);
  });
}

// Clear any error states when user starts typing
if (cityInput) {
  cityInput.addEventListener('input', function() {
    // Can be used to remove error messages or styles in the future
  });
}

// ========== Display Weather Function ==========
/**
 * Updates the UI with weather data
 * @param {Object} data - Weather data from API
 */
function displayWeather(data) {
  if (!data) return;

  const tempElement = document.getElementById('temp');
  const humidityElement = document.getElementById('humidity');
  const windElement = document.getElementById('wind');

  if (tempElement) {
    tempElement.textContent = `${Math.round(data.main.temp)}°C`;
  }

  if (humidityElement) {
    humidityElement.textContent = `${data.main.humidity}%`;
  }

  if (windElement) {
    windElement.textContent = `${Math.round(data.wind.speed)} m/s`;
  }

  console.log('Weather display updated');
}

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn'); // Check your HTML ID
    const cityInput = document.getElementById('city-input'); // Check your HTML ID

    searchBtn.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city) {
            // Call the function from api.js
            window.getWeather(city); 
        } else {
            alert('Please enter a city name');
        }
    });
});




