document.getElementById('searchBtn').addEventListener('click', function () {
  const keyword = document.getElementById('keyword').value;
  const country = document.getElementById('country').value;

  // Send message to background script to perform the scraping
  chrome.runtime.sendMessage({ type: 'search', keyword, country }, function (response) {
    if (response.status === 'success') {
      displayResults(response.data);
    } else {
      alert('Error: ' + response.message);
    }
  });
});

function displayResults(data) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  if (data && data.length > 0) {
    data.forEach(ad => {
      const adDiv = document.createElement('div');
      adDiv.textContent = `Ad: ${ad.text} - Country: ${ad.country}`;
      resultsDiv.appendChild(adDiv);
    });
  } else {
    resultsDiv.innerHTML = 'No ads found.';
  }
}
