const axios = require('axios');
  const https = require('https');

  // Create an https agent that ignores SSL certificate issues
  const agent = new https.Agent({
    rejectUnauthorized: false
  });
// const login = async () => {
//   try {
//     const response = await axios.post('http://35.184.25.135:5000/api/login', {
//       username: 'superadmin',
//       password: 'password'
//     }, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     console.log('Response data:', response.data);
//   } catch (error) {
//     if (error.response) {
//       // Server responded with a status other than 2xx
//       console.error('Server Error:', error.response.data);
//     } else if (error.request) {
//       // Request was made but no response received
//       console.error('No Response:', error.request);
//     } else {
//       // Something else happened during setup
//       console.error('Error', error.message);
//     }
//   }
// };

// login();



const options = {
  method: 'post',
  url: 'https://141.147.58.120/backend/api/v1/login',
  headers: {
    'Content-Type': 'application/json',
    'Cookie': 'session=%7B%22accesstoken%22%3A%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QyQGdtYWlsLmNvbSIsInVzZXJJZCI6Mywicm9sZSI6IkFkbWluIiwiaWF0IjoxNzI1MzY0NDMzLCJleHAiOjE3MjUzNzE2MzN9.VG3dgr4lMBnlxUcMGCrLeXFDGooF-gmSAbdc6mQwpaA%22%2C%22refreshtoken%22%3A%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QyQGdtYWlsLmNvbSIsInVzZXJJZCI6Mywicm9sZSI6IkFkbWluIiwiaWF0IjoxNzI1MzY0NDMzLCJleHAiOjE3MjU5NjkyMzN9.ING_gUJiI1k1fqqbCtspjqjumRz-WZRpOd4KsWKlITs%22%2C%22userID%22%3A3%2C%22roleID%22%3A25%2C%22region%22%3A12%7D'
  },
  data: {
    empid: '20647',
    password: 'password123',
    type: 'mobile'
  },
  httpsAgent: agent // Pass the custom agent
};

axios(options)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });
