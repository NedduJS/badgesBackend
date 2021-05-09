const Model = require('./model');

const addUser = (user) => {
  const myUser = new Model(user);
  myUser.save();
};

const getUsers = async (filterUser) => {
  const list = await Model.find(filterUser);
  return list;
};

const updateUser = async (id, update) => {
  const updatedUser = await Model.findByIdAndUpdate({ _id: id }, update, {
    new: true,
    useFindAndModify: false,
  });

  return updatedUser;
};

const deleteUser = async (id) => {
  const deletedUser = await Model.findByIdAndRemove(id);

  return deletedUser;
};

module.exports = {
  add: addUser,
  get: getUsers,
  update: updateUser,
  delete: deleteUser,
};
