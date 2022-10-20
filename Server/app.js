const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: './config.env' });
require('./db/conn');

const PORT = process.env.PORT;

const middlewares = (req, res, next) => {
    console.log('This is middlewares');
    next();
} 

app.get("/", (req, res) => {
  res.send("This is Home page");
});

app.get("/about", middlewares, (req, res) => {
  res.send("This is About page");
});

app.get("/contect", (req, res) => {
  res.send("This is Contect page");
});

app.get("/signin", (req, res) => {
  res.send("This is Sign In page");
});

app.get("/signup", (req, res) => {
  res.send("This is Sign Up page");
});

app.listen(PORT, () => {
  console.log('server is runing at port 3000');
});

