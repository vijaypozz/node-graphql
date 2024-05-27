const axios = require('axios');

const accessToken = 'IGQWRNN1FucFFFb19KZAkFkazVfbjVoME9rQm0yMlRpWUUybzRBT05JVFZAqXzBlLVd3TWdtNE5RMWlIdnVIUW1RelB1Q1BpNkYzNnJ6ZAk5NdlQ5Q3JpV0lGRWJreVJGWm1NUmZA2NjdVMW5vZA0NHUXpxMFRyUFJ0LVkZD'; // Replace with your actual access token

const url = 'https://graph.instagram.com/me/media';
const params = {
  fields: 'id,caption,media_url,media_type,timestamp,children{media_url}',
  access_token: accessToken
};

axios.get(url, { params })
  .then(response => {
    const data = response.data;
    console.log(data); // Access your data here
  })
  .catch(error => {
    console.error(error);
  });
