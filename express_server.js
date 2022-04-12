const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8000; //default port 8000
const ENV = process.env.ENV || 'development';

app.use(bodyParser.urlencoded({extended: true}));
app.set ('view engine', 'ejs');


const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
}

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/urls.json", (req, res) => {
  res.json(urlDatabase);
});

app.get("/hello", (req, res) => {
  res.send("<html><body>Hello <b>World</b></body></html>\n");
});

app.get("/urls", (req, res) => {
  res.send("urls page!");
})

app.get("/home", (req, res) => {
  res.render("home");
})

app.get("/features", (req, res) => {
  res.render("features");
})

app.get("/pricing", (req, res) => {
  res.render("pricing");
})
app.get("/urls/new", (req, res) => {
  res.render("urls_new");
})

app.post("/urls", (req,res)=> {
  console.log(req.body);  // Log the POST request body to the console
  res.send("Ok");         // Respond with 'Ok' (we will replace this)
})





app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});