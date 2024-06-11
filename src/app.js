const express = require('express');
const userRoutes = require('./app/routes/userRoute');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

var cors = require('cors')

app.use(cors());

// Apply Json
app.use(express.json());

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kctec8p.mongodb.net/Donation?retryWrites=true&w=majority&appName=Cluster0`;


mongoose.connect(url,{
})
.then(()=> console.log('Database connection established'))
.catch(err => console.log(err));

// Creating Route for users
app.use('/api/users',userRoutes);

app.get('/', (req, res) => {
  res.send('Hello, From Donation Server! ✌')
});


module.exports = app;