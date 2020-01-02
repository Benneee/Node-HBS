const log = console.log;
const con = console;
log("Client side javascript loaded!");

const address = "Lagos";
const geocodeUrl = `http://localhost:3000/weather?address=${address}`;

fetch(geocodeUrl).then(response => {
  response
    .json()
    .then(data => {
      if (data.error) {
        log(data.error);
      } else {
        log(data.location);
        log(data.forecast);
      }
    })
    .catch(error => log(error));
});
