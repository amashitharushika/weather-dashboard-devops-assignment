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
 * Validates input, fetches weather data from API
 * @param {Event} event - The form submission event
 */
function handleSearch(event) {
  event.preventDefault();

  const cityName = cityInput.value.trim();

  if (cityName === '') {
    alert('Please enter a city name to search.');
    cityInput.focus();
    return;
  }

  console.log('Searching for city:', cityName);
  window.getWeather(cityName);
}

// ========== Event Listeners ==========
// Add event listener to search form submission (Enter key support)
if (searchForm) {
  searchForm.addEventListener('submit', handleSearch);
}

// Add explicit Enter key support on input field
if (cityInput) {
  cityInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch(event);
    }
  });
}

// Add click listener to search button
if (searchButton) {
  searchButton.addEventListener('click', function(event) {
    event.preventDefault();
    handleSearch(event);
  });
}

// Clear error messages when user starts typing
if (cityInput) {
  cityInput.addEventListener('input', function() {
    // Can be used to remove error styles in the future
  });
}




