const express = require("express");
const app = express();
const cors = require('cors')
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const postRoutes = require("./routes/post")
const commentRoutes = require("./routes/comment")

const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

require('dotenv').config();

//MONGODV CONNECTION
const uri = process.env.ATLAS_URI;
mongoose.set('strictQuery', false);
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;


//MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))



//ROUTES
app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use("/post", postRoutes)
app.use("/comment", commentRoutes)



connection.once('open', () => {
  console.log("MongoDB Connected");
})

app.listen(port, () => {
    console.log("PORT LISTENING")
})