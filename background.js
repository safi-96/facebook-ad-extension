async function fetchAdsFromFacebook(keyword, country) {
  try {
    const response = await fetch('http://localhost:5000/fetch-ads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ keyword, country }),
    });
    const data = await response.json();
    return data.ads;  // Adjust based on the response format
  } catch (error) {
    throw new Error('Error fetching ads');
  }
}
