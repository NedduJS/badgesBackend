require('dotenv').config();

const config = {
  port: process.env.PORT,
  user: process.env.ADMIN,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  db_name: process.env.DB_NAME,
};

module.exports = config;
