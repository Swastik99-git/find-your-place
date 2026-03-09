// const axios = require('axios');

// const HttpError = require('../models/http-error');

// // // const API_KEY = 'AIzaSyBuN7svFeUpqPvCmsurt56frBMfKiyPkYE';

// async function getCoordsForAddress(address) {
//   return {
//     lat: 40.7484474,
//     lng: -73.9871516
//   };

// //   // The below code i have not used because i have not any api keys and address so we simply implements the return statement 
//   const response = await axios.get(
//     `curl 'https://console.cloud.google.com/apis/credentials?project=places-project-435108'=${encodeURIComponent(
//       address
//     )}&key=${API_KEY}`
//   );

//   const data = response.data;

//   if (!data || data.status === 'ZERO_RESULTS') {
//     const error = new HttpError(
//       'Could not find location for the specified address.',
//       422
//     );
//     throw error;
//   }

//   const coordinates = data.results[0].geometry.location;

//   return coordinates;
// }

// module.exports = getCoordsForAddress;

