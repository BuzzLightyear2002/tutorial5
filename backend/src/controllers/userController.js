const userService = require('../services/userService');

// GET all users
exports.getUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.json({message: "Users retrieved", success: true, users: users});
  } catch (error) {
    next(error);
  }
};

// GET a specific user by ID
exports.getUser = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({sucess: true, user: user});
  } catch (error) {
    next(error);
  }
};

// POST route to add a new user
exports.createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({message: "User added", success: true});
  } catch (error) {
    next(error);
  }
};

// PUT route to update a user by ID
exports.updateUser = async (req, res, next) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({message: "User updated", success: true});
  } catch (error) {
    next(error);
  }
};
