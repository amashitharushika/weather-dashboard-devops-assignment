// api/weather.js
export default async function handler(request, response) {
    // 1. Get the city from the frontend request
    const { city } = request.query;

    if (!city) {
        return response.status(400).json({ error: 'City name is required' });
    }

    // 2. Get the Secret Key from Vercel Environment
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const baseUrl = 'https://api.openweathermap.org/data/2.5';

    try {
        // 3. Fetch Current Weather (Server-to-Server)
        const weatherRes = await fetch(`${baseUrl}/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!weatherRes.ok) throw new Error('Failed to fetch weather');
        const weatherData = await weatherRes.json();

        // 4. Fetch Forecast (Server-to-Server)
        const forecastRes = await fetch(`${baseUrl}/forecast?q=${city}&appid=${apiKey}&units=metric`);
        if (!forecastRes.ok) throw new Error('Failed to fetch forecast');
        const forecastData = await forecastRes.json();

        // 5. Send combined data back to your frontend
        return response.status(200).json({
            current: weatherData,
            forecast: forecastData
        });

    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
}

