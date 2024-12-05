// When the "Fetch Ads" button is clicked
document.getElementById("fetchAds").addEventListener("click", async () => {
  const keyword = document.getElementById("keyword").value;
  const country = document.getElementById("country").value;
  const resultDiv = document.getElementById("result");

  // Validate input
  if (!keyword || !country) {
    resultDiv.innerHTML = "<p style='color: red;'>Please enter both keyword and country.</p>";
    return;
  }

  try {
    // Call your backend API
    const response = await fetch("http://localhost:5000/fetch-ads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ keyword, country })
    });

    if (!response.ok) {
      throw new Error("Failed to fetch ads. Please check your backend.");
    }

    // Parse and display results
    const data = await response.json();
    resultDiv.innerHTML = `
      <h4>Ads Results:</h4>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
  } catch (error) {
    console.error(error);
    resultDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
});
