require('dotenv').config();
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Database Connection
const mongoose  = require("mongoose");


// Local
// const mongoURL = process.env.PROD_MONGODB || "mongodb://localhost:27017/bookssearch";
// mongoose.connect(mongoURL, {useNewUrlParser: true})
//   .then(() => {
//     console.log("Successfully connected to Mongo DB.");
//   })
//   .catch((err) => {
//     console.log(`Error connecting to Mongo DB: ${err}`)
//   });

// mLab deployed...
const mongoURL = process.env.MONGODB_URI || "mongodb+srv://user:manzana1@cluster0-olmdw.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoURL, {useNewUrlParser: true})
  .then(() => {
    console.log("Successfully connected to Mongo DB.");
  })
  .catch((err) => {
    console.log(`Error connecting to Mongo DB: ${err}`)
  });

// Define API routes here
require("./routes/api-routes")(app);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// "scripts": {
//   "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
//   "start:prod": "node server.js",
//   "start:dev": "concurrently \"nodemon --ignore 'client/*'\" \"npm run client\"",
//   "client": "cd client && npm run start",
//   "install": "cd client && npm install",
//   "build": "cd client && npm run build",
//   "heroku-postbuild": "npm run build"
// },