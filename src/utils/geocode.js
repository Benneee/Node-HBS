const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiYmVubmVlZSIsImEiOiJjazRvcmdqZGgxbncwM2psZDZ2MTR0YjJ6In0.vEaw6GyZ_hG8ozdmmWtqVg&limit=1`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback(`Unable to connect to geocoding service`, undefined);
    } else if (body.message) {
      callback("Place not found", undefined);
    } else if (body.features.length === 0) {
      callback(`Unable to find location, try another search`, undefined);
    } else {
      const res = body.features[0];
      callback(undefined, {
        latitude: res.center[1],
        longitude: res.center[0],
        location: res.place_name
      });
    }
  });
};

module.exports = geocode;
