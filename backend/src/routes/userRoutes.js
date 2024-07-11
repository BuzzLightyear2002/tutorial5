const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET all users
router.get('/users', userController.getUsers);

// GET a specific user by ID
router.get('/user/:id', userController.getUser);

// POST route to add a new user
router.post('/add', userController.createUser);

// PUT route to update a user by ID
router.put('/update/:id', userController.updateUser);

module.exports = router;
