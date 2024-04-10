/*
** EPITECH PROJECT, 2023
** kedubak-maskapitaliste
** File description:
** poste_route.js
*/


const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');


router.post('/register', UserController.register);

router.post('/login', UserController.login);

module.exports = router;
