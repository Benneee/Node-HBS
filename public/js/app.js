// const log = console.log;
// const con = console;
// log("Client side javascript loaded!");

// const address = "Lagos";

const form = document.querySelector("form");
const query = document.querySelector("input");
let message = document.querySelector(".location");
let forecast = document.querySelector(".forecast");

form.addEventListener("submit", fetchWeather);

function fetchWeather(e) {
  e.preventDefault();
  const address = query.value;

  const geocodeUrl = `http://localhost:3000/weather?address=${address}`;

  if (address && address !== "") {
    message.textContent = "Loading Weather Forecast...";
    forecast.textContent = "";
  }

  fetch(geocodeUrl).then(response => {
    response
      .json()
      .then(data => {
        if (data.error) {
          message.textContent = data.error;
        } else {
          message.textContent = data.location;
          forecast.textContent = data.forecast;
        }
      })
      .catch(error => log(error));
  });
}
