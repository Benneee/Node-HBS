const path = require("path");
const express = require("express");

const log = console.log;

log(__dirname);
const publicDirPath = path.join(__dirname, "../public");

const app = express();

// Key value pair to tell express the view engine we would like to use for rendering
app.set("view engine", "hbs");

// app.use helps customise our server
app.use(express.static(publicDirPath));

// To ensure our hbs template is rendered in the browser, we set a route
// res.render allows us to use one of our preset view engines to render the file on the browser
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Benedict Nkeonye"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Benedict Nkeonye"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "The Help Page",
    name: "This page will give you all the help you need for the weather app"
  });
});

app.listen(3000, () => {
  log("Server is up on port 3000");
});
