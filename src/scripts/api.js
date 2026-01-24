const API_KEY = 'f2f31dec0301180816db233799499d75'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Function to fetch weather data
async function getWeather(city) {
    try {
        console.log(`Fetching weather for: ${city}`); // Debugging log

        // 2. Fetch Current Weather - Use encodeURIComponent for proper encoding
        const currentResponse = await fetch(`${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`);
        
        if (!currentResponse.ok) {
            throw new Error(`City "${city}" not found. Please check the spelling.`);
        }
        const currentData = await currentResponse.json();

        // 3. Fetch 5-Day Forecast
        const forecastResponse = await fetch(`${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`);
        
        if (!forecastResponse.ok) {
            throw new Error('Unable to fetch forecast data.');
        }
        const forecastData = await forecastResponse.json();

        // 4. Update the UI
        updateUI(currentData, forecastData);

    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Error: ' + error.message);
    }
}

// Function to update the DOM (User Interface)
function updateUI(current, forecast) {
    // A. Update Current Weather - Update specific elements instead of replacing HTML
    const tempElement = document.getElementById('temp');
    const humidityElement = document.getElementById('humidity');
    const windElement = document.getElementById('wind');
    
    // Get weather icon/emoji based on weather condition
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

    // B. Update 5-Day Forecast
    // The API returns data every 3 hours. We pick one reading per day (every 8th item)
    const forecastContainer = document.getElementById('forecast-container'); // Ensure this ID exists in HTML
    if (forecastContainer) {
        forecastContainer.innerHTML = ''; // Clear previous data
        
        // Filter to get roughly one reading per day (index 0, 8, 16, etc.)
        for (let i = 0; i < forecast.list.length; i += 8) {
            const day = forecast.list[i];
            const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
            const icon = getWeatherIcon(day.weather[0].main);
            
            const card = document.createElement('div');
            card.className = 'forecast-card'; // Make sure you have CSS for this class
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

// Function to get weather emoji/icon based on weather condition
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

// Export the function so app.js can use it
// Note: If you are not using modules in HTML (<script type="module">), 
// just attach it to window or ensure api.js loads before app.js
window.getWeather = getWeather;

// Load default city on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Loading default weather for Colombo...');
    getWeather('Colombo');
});

