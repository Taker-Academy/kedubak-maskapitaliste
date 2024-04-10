/*
** EPITECH PROJECT, 2023
** kedubak-maskapitaliste
** File description:
** post.js
*/



const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  firstName: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

const postSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  comments: [commentSchema],
  upVotes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
