import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// 1. Load Secrets
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// 2. Serve Frontend (HTML/CSS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'src')));

// 3. Secure API Route
app.get('/api/weather', async (req, res) => {
    const { city } = req.query;
    if (!city) return res.status(400).json({ error: 'City required' });

    const apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'API Key missing' });

    try {
        const baseUrl = 'https://api.openweathermap.org/data/2.5';
        const [weatherRes, forecastRes] = await Promise.all([
            fetch(`${baseUrl}/weather?q=${city}&appid=${apiKey}&units=metric`),
            fetch(`${baseUrl}/forecast?q=${city}&appid=${apiKey}&units=metric`)
        ]);

        const weather = await weatherRes.json();
        const forecast = await forecastRes.json();
        res.json({ current: weather, forecast: forecast });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 4. Start Listening
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

