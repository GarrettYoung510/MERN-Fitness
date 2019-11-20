const express = require("express");
// const bodyParser = require('body-parser'); // already included in express
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// cross origin for passing data in and outside our server
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})