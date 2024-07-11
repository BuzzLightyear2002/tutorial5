require('dotenv').config();

module.exports = {
  db: {
    uri: process.env.DB_URI,
  },
  secret: process.env.JWT_SECRET,
  port: process.env.PORT || 3000,
};
