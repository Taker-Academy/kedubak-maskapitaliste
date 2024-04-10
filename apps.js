/*
** EPITECH PROJECT, 2023
** kedubak-maskapitaliste
** File description:
** apps.js
*/

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');


const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/kdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.use('/user', userRoutes);
app.use('/post', postRoutes);


app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
