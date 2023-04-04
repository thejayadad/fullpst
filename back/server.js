const express = require("express");
const app = express();



const mongoose = require('mongoose');
const port = process.env.PORT || 5001;

require('dotenv').config();


const uri = process.env.ATLAS_URI;
mongoose.set('strictQuery', false);
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB Connected");
})

app.listen(port, () => {
    console.log("PORT LISTENING")
})