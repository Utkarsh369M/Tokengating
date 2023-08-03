const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': QN_51b3b6f5c5e5467cbb39b5c459f966e3,
};

const data = {
  name: 'My Destination',
  to_url: "https://4fdf-2409-4081-ab86-8b0b-211b-b633-2684-1656.ngrok-free.app/webhook",
  webhook_type: 'POST',
  service: 'webhook',
  payload_type: 5
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, { headers })
  .then(response => console.log("Response Data",response.data))
  .catch(error => console.log('error', error));