const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url = `https://api.darksky.net/forecast/0bb3f9a06986871e44f977a63529a356/${latitude},${longitude}?units=si`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback(`Unable to connect to weather service`, undefined);
    } else if (body.error) {
      callback(`Unable to find location`, undefined);
    } else {
      const data = body.currently;
      const dailyData = body.daily.data[0];
      callback(
        undefined,
        `${dailyData.summary} It is currently ${data.temperature} degrees. The temperature can go as high as ${dailyData.temperatureHigh} degrees and as low as ${dailyData.temperatureLow} degrees. There is a ${data.precipProbability}% chance of rain.`
      );
    }
  });
};

module.exports = forecast;
