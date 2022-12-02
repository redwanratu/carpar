const express = require('express');
const cors = require('cors');

const parkingSlotRoute = require('./routes/parkingSlotRoute');
const globalErrorHandler = require('./controllers/errorController');
const app = express();

app.use(cors())
app.use(express.json())

app.use('/api/v1/status', parkingSlotRoute);

app.use(globalErrorHandler)
module.exports = app;
