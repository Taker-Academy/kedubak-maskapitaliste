/*
** EPITECH PROJECT, 2023
** kedubak-maskapitaliste
** File description:
** usr_route.js
*/


const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/me', UserController.getUserProfile);
router.put('/edit', UserController.editUserProfile);
router.delete('/remove', UserController.removeUserProfile);

module.exports = router;
