// server.js
const express = require('express');
const axios = require('axios');
const app = express();

const apiKey = 'YBA9GR6MtpHsN0eSriD2bBDpH1oFNphrDCwM33Ti'; // Replace with your Freesound API key
const apiUrl = 'https://freesound.org/apiv2/search/text/';

app.use(express.json());

app.get('/api/search', async (req, res) => {
    try {
        const response = await axios.get(apiUrl, {
            params: {
                query: req.query.query,
                token: apiKey,
            },
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
