const API_KEY = 'f2f31dec0301180816db233799499d75'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Function to fetch weather data
async function getWeather(city) {
    try {
        console.log(`Fetching weather for: ${city}`); // Debugging log

        // 2. Fetch Current Weather
        const currentResponse = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
        
        if (!currentResponse.ok) {
            throw new Error('City not found');
        }
        const currentData = await currentResponse.json();

        // 3. Fetch 5-Day Forecast
        const forecastResponse = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
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
    // A. Update Current Weather
    const weatherContainer = document.getElementById('current-weather'); // Ensure this ID exists in HTML
    if (weatherContainer) {
        weatherContainer.innerHTML = `
            <h3>${current.name} (${new Date().toLocaleDateString()})</h3>
            <p>Temp: ${current.main.temp}°C</p>
            <p>Wind: ${current.wind.speed} m/s</p>
            <p>Humidity: ${current.main.humidity}%</p>
        `;
    }

    // B. Update 5-Day Forecast
    // The API returns data every 3 hours. We pick one reading per day (every 8th item)
    const forecastContainer = document.getElementById('forecast-container'); // Ensure this ID exists in HTML
    if (forecastContainer) {
        forecastContainer.innerHTML = ''; // Clear previous data
        
        // Filter to get roughly one reading per day (index 0, 8, 16, etc.)
        for (let i = 0; i < forecast.list.length; i += 8) {
            const day = forecast.list[i];
            const date = new Date(day.dt * 1000).toLocaleDateString();
            
            const card = document.createElement('div');
            card.className = 'forecast-card'; // Make sure you have CSS for this class
            card.innerHTML = `
                <h4>${date}</h4>
                <p>Temp: ${day.main.temp}°C</p>
                <p>Hum: ${day.main.humidity}%</p>
            `;
            forecastContainer.appendChild(card);
        }
    }
}


window.getWeather = getWeather;




