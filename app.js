const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const dotenv = require('dotenv');

const connectDb = require('./config/db');

// Load config
dotenv.config({ path: './config/config.env' });

connectDb();

app.use('/', require('./routes/index'));

app.listen(3000);

console.log('Listening on port 3000');


