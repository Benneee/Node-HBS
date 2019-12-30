const path = require("path");
const express = require("express");
const log = console.log;

const hbs = require("hbs"); // Loading this in because we want to use partials

const app = express();

// Define paths for express config
const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views"); // customising views directory to our choice
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views directory location
app.set("view engine", "hbs"); // Key value pair to tell express the view engine we would like to use for rendering
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static files directory
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
    helpText:
      "This page will give you all the help you need for the weather app",
    name: "Benedict Nkeonye"
  });
});

// To match any page after help that wasn't originally declared
app.get("/help/*", (req, res) => {
  res.render("404", {
    errorText: "Help article not found"
  });
});

// Wildcard route => For inexistent routes
app.get("*", (req, res) => {
  res.render("404", {
    errorText: "Page not found"
  });
});

app.listen(3000, () => {
  log("Server is up on port 3000");
});
