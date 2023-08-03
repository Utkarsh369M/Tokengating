const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': QN_51b3b6f5c5e5467cbb39b5c459f966e3,
};

const data = {
  name: 'NFT Transfer',
  expression: 'KHR4X2xvZ3NfdG9waWMxID1+ICc1Qzc1Njc5QjM0OTdDODQ2ZDRBOGVhNzE1ZDc2NjQxNTMzM0FBMzU4JykgJiYgDQoodHhfbG9nc19hZGRyZXNzID09ICcweDlBMDQ2MTQyOGNjOTNEZGUyREM2RjAyNUQ3YTJEOUVEN2ZCYkNDNTEnKSAmJiANCih0eF9sb2dzX3RvcGljMCA9PSAnMHhkZGYyNTJhZDFiZTJjODliNjljMmIwNjhmYzM3OGRhYTk1MmJhN2YxNjNjNGExMTYyOGY1NWE0ZGY1MjNiM2VmJyk=',
  network: 'ethereum-sepolia',
  destinationIds: ['a53157f3-bef5-4920-8db1-1965cb27944c']
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));

  // (tx_logs_topic1 =~ '5C75679B3497C846d4A8ea715d766415333AA358') && 
// (tx_logs_address == '0x9A0461428cc93Dde2DC6F025D7a2D9ED7fBbCC51') && 
// (tx_logs_topic0 == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef')