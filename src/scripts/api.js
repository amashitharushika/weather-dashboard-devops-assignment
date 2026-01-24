const API_KEY = 'f2f31dec0301180816db233799499d75'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

/**
 * Fetches weather data from OpenWeatherMap API
 * @param {string} city - The city name to fetch weather for
 */
async function getWeather(city) {
    try {
        console.log(`Fetching weather for: ${city}`);

        // Fetch Current Weather
        const currentResponse = await fetch(`${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`);
        
        if (!currentResponse.ok) {
            throw new Error(`City "${city}" not found. Please check the spelling.`);
        }
        const currentData = await currentResponse.json();

        // Fetch 5-Day Forecast
        const forecastResponse = await fetch(`${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`);
        
        if (!forecastResponse.ok) {
            throw new Error('Unable to fetch forecast data.');
        }
        const forecastData = await forecastResponse.json();

        // Update the UI
        updateUI(currentData, forecastData);
        console.log('Weather data successfully displayed');

    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Error: ' + error.message);
    }
}

/**
 * Updates the UI with weather data
 * @param {object} current - Current weather data
 * @param {object} forecast - 5-day forecast data
 */
function updateUI(current, forecast) {
    // Hide placeholder text in forecast container
    const placeholders = document.querySelectorAll('.placeholder-text');
    placeholders.forEach(p => p.style.display = 'none');
    
    // Update Current Weather elements
    const tempElement = document.getElementById('temp');
    const humidityElement = document.getElementById('humidity');
    const windElement = document.getElementById('wind');
    
    const weatherIcon = getWeatherIcon(current.weather[0].main);
    
    if (tempElement) {
        tempElement.innerHTML = `<span class="weather-icon">${weatherIcon}</span> ${Math.round(current.main.temp)}°C`;
    }
    if (humidityElement) {
        humidityElement.innerHTML = `<span class="weather-icon">💧</span> ${current.main.humidity}%`;
    }
    if (windElement) {
        windElement.innerHTML = `<span class="weather-icon">💨</span> ${Math.round(current.wind.speed)} m/s`;
    }

    // Update 5-Day Forecast
    const forecastContainer = document.getElementById('forecast-container');
    if (forecastContainer) {
        forecastContainer.innerHTML = '';
        
        // Get one reading per day (every 8th item = 24 hours)
        for (let i = 0; i < forecast.list.length; i += 8) {
            const day = forecast.list[i];
            const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
            const icon = getWeatherIcon(day.weather[0].main);
            
            const card = document.createElement('div');
            card.className = 'forecast-card';
            card.innerHTML = `
                <h4>${date}</h4>
                <div class="forecast-icon" style="font-size: 2.5rem;">${icon}</div>
                <p class="forecast-temp"><strong>${Math.round(day.main.temp)}°C</strong></p>
                <p class="forecast-humidity">💧 ${day.main.humidity}%</p>
            `;
            forecastContainer.appendChild(card);
        }
    }
}

/**
 * Returns weather emoji based on weather condition
 * @param {string} weatherCondition - The weather condition from API
 * @returns {string} - Weather emoji
 */
function getWeatherIcon(weatherCondition) {
    const condition = weatherCondition.toLowerCase();
    
    if (condition.includes('clear') || condition.includes('sunny')) return '☀️';
    if (condition.includes('cloud')) return '☁️';
    if (condition.includes('rain')) return '🌧️';
    if (condition.includes('snow')) return '❄️';
    if (condition.includes('wind')) return '💨';
    if (condition.includes('fog') || condition.includes('mist')) return '🌫️';
    if (condition.includes('thunder') || condition.includes('storm')) return '⛈️';
    if (condition.includes('drizzle')) return '🌦️';
    
    return '🌤️'; // Default
}

// Export function for use in app.js
window.getWeather = getWeather;

// Load default city on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Loading default weather for Colombo...');
    getWeather('Colombo');
});




