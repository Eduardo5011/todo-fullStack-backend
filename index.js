require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require('./config/dbConn');
const app = express();
const corsOptions = require('./config/corsOptions')
const cors = require('cors');
const PORT = process.env.PORT || 5000;



connectDB();

app.use(cors(corsOptions))

app.use(express.json())

app.use(require('./routes/TodoRoutes'));


mongoose.connection.once('open', () => {
  console.log("connected to MongoDB");
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
