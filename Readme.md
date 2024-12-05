# Instructions

### 1. Set Up Your Development Environment

### Install Dependencies:

- Node.js: Install Node.js and npm from Node.js official website.
- Firebase SDK: For authentication.
- Stripe SDK: For payments.
- Chrome Extension Setup: Create basic files for your Chrome extension (manifest, popup.html, popup.js).

- Create Firebase Project:
- Go to Firebase Console, create a project, and enable Firebase Authentication.

- Create Stripe Account:
- Go to Stripe and create an account.
- Set up your products and subscriptions in the Stripe dashboard.

### Develop the Backend API
- Set Up Express Server (Node.js):

- Initialize a Node.js project:
- `npm init -y`
- `npm install express axios stripe firebase-admin cors`
- Create an Express server to handle API requests (e.g., fetching ads and handling Stripe payments).

- Facebook Ads API:
- Set up an endpoint to interact with the Facebook Ads Library API using Axios. Configure the endpoint to accept keyword and country parameters to fetch relevant ads.
- Make sure to replace 'YOUR_FACEBOOK_API_TOKEN' with your actual token.

- Stripe Payment API:
- Set up Stripe to handle subscription payments. Use the stripe.checkout.sessions.create() method to create a checkout session for recurring payments (subscriptions).
- Add an endpoint /create-checkout-session to handle the Stripe checkout flow.

- Firebase Authentication:
- Use Firebase Admin SDK to handle user authentication in the backend.
- Create endpoints to verify user authentication before allowing access to certain functionalities (e.g., fetching ads, managing subscriptions).

### Develop the Chrome Extension
- Create Manifest File (manifest.json):
- Define extension permissions (e.g., activeTab, storage, https://www.facebook.com/*).
- Define the background script (background.js) and popup HTML (popup.html).

-Popup HTML and JS:
- Create a basic UI with fields for keywords, country, and a Fetch Ads button.
- Use popup.js to send requests to your local server (e.g., http://localhost:5000/fetch-ads) and display the results.

- Firebase Authentication:
- Implement a sign-in system using Google Authentication (or other providers) with Firebase in popup.js.
- After authentication, display subscription-related content (e.g., show subscription button if the user is not subscribed).

- Stripe Subscription Button:
- Add a Subscribe button in the popup, and when clicked, send a request to your backend to create a Stripe checkout session.
- Use stripe.redirectToCheckout to redirect users to Stripe’s payment page.

### Combine Backend and Frontend
- Connect the Extension to the Backend:
- In popup.js, after user authentication, fetch ads using the /fetch-ads endpoint.
On subscription, trigger the /create-checkout-session endpoint to initiate Stripe’s checkout process.

- Handle User State:
- Use Firebase's onAuthStateChanged to track the user’s authentication status.
- After authentication, check if the user is subscribed, and display relevant UI (e.g., show subscription status or subscription button).

### Testing Locally
- Run the Node.js Server Locally:
- `node server.js`

- Test Facebook Ads Fetching:
- Use Postman to test your /fetch-ads endpoint. Ensure it's working before integrating with the extension.
- Send a POST request with keyword and country to http://localhost:5000/fetch-ads.

-Test Subscription Flow:
- Use Stripe’s test mode to simulate payments and ensure the subscription flow works correctly.
- Test that after successful payment, the user is granted access and their subscription status is updated in the backend.

### Package the Chrome Extension
- Prepare for Deployment:
- Make sure your extension is working properly by loading it as an unpacked extension in Chrome (chrome://extensions → Enable Developer Mode → Load unpacked).
- Verify that the extension can successfully authenticate users, fetch ads, and handle subscriptions.

- Add Necessary Icons and Polish the UI:
- Add app icons (16x16, 48x48, 128x128 pixels) and finalize the UI of the extension.
- Upload the Extension to Chrome Web Store (optional):

- If you want to distribute your extension, go to the Chrome Web Store Developer Dashboard and upload your extension’s ZIP file.
- Follow the submission process, which includes providing detailed descriptions and screenshots.

### Deploy Backend
- Deploy the Node.js Server:
- Deploy your backend to a hosting platform like Heroku, Vercel, or DigitalOcean. Ensure that your server is accessible by the extension in production.
- Update your popup.js in the extension to use the live backend URL (e.g., https://your-server.com/fetch-ads).

- Set Up Environment Variables:
- For Stripe and Firebase, securely store API keys and credentials using environment variables on your hosting platform.

- Monitor and Maintain
- Monitor Usage:
- Set up logging and error handling for both the extension and backend (e.g., using Firebase Analytics or Stripe Dashboard).
- Ensure that the payment flow, user sign-ins, and ad fetching are functioning smoothly.

- Handle Subscription Management:
- Use Stripe’s webhook to listen for subscription updates, cancellations, and renewals, and update the user's subscription status accordingly.

- Updates and Bug Fixes:
- Regularly update your extension and backend to handle new features, bug fixes, or changes to third-party APIs (e.g., Facebook Graph API or Stripe).

- Final Notes:
- Security: Ensure sensitive data (like Firebase API keys and Stripe keys) is never exposed in the frontend (Chrome extension).
- Testing: Test everything thoroughly—extension UI, authentication, ad fetching, and subscription handling—before deployment.
- User Experience: Make the extension user-friendly and ensure the payment process is clear and smooth for users.
- By following these steps, you'll have a complete Chrome extension with authentication, payment subscription, and Facebook Ads scraping. Let me know if you need more detailed assistance with any of the steps!
