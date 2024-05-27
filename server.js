const InstagramGraphAPI = require('instagram-graph-api'); // Import the class

const accessToken = 'EAALVdu4nBboBOZB8X6ZChnOFH1BvOoZBpZCf6iKWkTXdmmalow3ZCApfSYaKHrI881bf1EcepOU8LcZAjZBU23LpXRZAzAw5WZCRfCTvKPxhGwsX4sqcYAMxT3GB4c1FxfFZAwGmtX6wSzy3m5Rk7jfEIei5WIoaFDS9QSYQNpsMZApnHRMMc19sHCWJwWZAjOG6MlYVg2gGcGU83ibtaxZB3lQZDZD'
const instagram = new InstagramGraphAPI({
  accessToken
});

// Example: Get media feed for a specific user
const userId = '6829288477173156';

instagram.getMediaFeed(userId)
  .then(mediaFeed => {
    console.log(mediaFeed,"mediaFeed")
    mediaFeed.data.forEach(media => {
      const imageUrl = media.media_url; // Assuming image media
      const likesCount = media.like_count;

      console.log(`Image URL: ${imageUrl}`);
      console.log(`Likes: ${likesCount}`);
    });
  })
  .catch(error => {
    console.error(error);
  });
