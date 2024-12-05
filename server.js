const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());  // Allow cross-origin requests (important for frontend access)

// Your Facebook API token (ensure this is securely handled)
const accessToken = 'YOUR_FACEBOOK_API_TOKEN';  // Replace with your actual Facebook API token

app.get('/', (req, res) => {
  res.send('Welcome to the Facebook Ads API server! Use the /fetch-ads endpoint to fetch ads.');
});

// Endpoint to get Facebook ads based on filters
app.post('/fetch-ads', async (req, res) => {
  const { keyword, country } = req.body;

  // Check if both keyword and country are provided
  if (!keyword || !country) {
    return res.status(400).json({ message: 'Keyword and country are required' });
  }

  try {
    // Construct the URL with the appropriate query parameters
    const url = `https://graph.facebook.com/v13.0/ads_library`;

    // Make the request to Facebook Ads Library API
    const response = await axios.get(url, {
      params: {
        search_terms: keyword,  // Search term to filter the ads
        country: country,  // Country code (ISO-3166-1 alpha-2 format, e.g., 'US', 'GB')
        access_token: accessToken,  // Your Facebook API token
      },
    });

    // Send the API response back to the client
    res.json(response.data);
  } catch (error) {
    // Log the error to server console for debugging
    console.error(error);

    // Send error message to client
    res.status(500).json({
      message: 'Error fetching ads from Facebook Ads Library',
      error: error.response ? error.response.data : error.message,
    });
  }
});

// Start the server on port 5000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
