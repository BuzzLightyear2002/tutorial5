const User = require('../models/userModel');

exports.getAllUsers = async () => {
  return await User.find();
};

exports.getUserById = async (id) => {
  return await User.findById(id);
};

exports.createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

exports.updateUser = async (id, userData) => {
  return await User.findByIdAndUpdate(id, userData, { new: true });
};
