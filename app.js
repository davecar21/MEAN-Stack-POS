// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Modules
const route = require('./backend/route/itemRoute');
const Item = require('./backend/model/itemSchema');

var app = express();

const PORT = 3000;

// DB connection
mongoose.connect('mongodb://localhost:27017/POS');

mongoose.connection.on('connected', () => {
    console.log('mongoDB is connected');
});

mongoose.connection.on('error', (err) => {
    console.log('NO connection to mongoDB');
});

app.use(cors());

app.use(bodyParser.json());

app.use('/Items', route);


app.listen(PORT, () => {
    console.log("Server listen to PORT " + PORT);
});

//nodemon - used for auto refresh of Node Server when code changes