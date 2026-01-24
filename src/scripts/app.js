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
 * Validates input and logs the city name or alerts the user
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

  // Log the city name to console
  console.log('Searching for city:', cityName);

  // TODO: Add API call to fetch weather data here
  // For now, we're just logging the city name
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

// ========== Initialization ==========
document.addEventListener('DOMContentLoaded', function() {
  console.log('Weather Dashboard initialized');
  // Focus the input field for better UX
  cityInput.focus();
});
