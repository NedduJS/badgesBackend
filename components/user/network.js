const express = require('express');
const router = express.Router();

const controller = require('./controller');
const response = require('../../network/response');

router.post('/', async (req, res) => {
  try {
    const { name, username, email, jobTitle, share } = req.body;
    const newUser = await controller.addUser(
      name,
      username,
      email,
      jobTitle,
      share
    );
    response.success(req, res, newUser, 201);
  } catch (error) {
    response.error(req, res, 'Error inesperado', 500, error);
  }
});

router.get('/', async (req, res) => {
  try {
    const filter = req.query.name;
    const result = await controller.getUsers(filter);
    response.success(req, res, result, 200);
  } catch (error) {
    response.error(req, res, 'Ups', 500, error);
  }
});

router.patch('/', async (req, res) => {
  try {
    const { id, name, username, email, jobTitle, share } = req.body;
    const updatedUser = await controller.updateUser(
      id,
      name,
      username,
      email,
      jobTitle,
      share
    );
    response.success(req, res, updatedUser, 200);
  } catch (error) {
    response.error(req, res, 'Error', 500, error);
  }
});

module.exports = router;
