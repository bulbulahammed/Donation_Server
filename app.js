const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

var cors = require('cors')

app.use(cors());

// Apply Json
app.use(express.json());

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qwjqwpy.mongodb.net/Donation?retryWrites=true&w=majority
`;

mongoose.connect(url,{
})
.then(()=> console.log('Database connection established'))
.catch(err => console.log(err));



app.get('/', (req, res) => {
  res.send('Hello, From Donation Server! ✌')
});


module.exports = app;