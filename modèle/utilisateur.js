/*
** EPITECH PROJECT, 2023
** kedubak-maskapitaliste
** File description:
** utilisateur.js
*/



const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  lastUpVote: {
    type: Date,
    default: () => new Date(Date.now() - 60000) 
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
