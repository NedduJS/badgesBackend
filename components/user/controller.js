const store = require('./store');

const addUser = (name, username, email, jobTitle, share) => {
  return new Promise((resolve, reject) => {
    if (!name || !username || !jobTitle) {
      reject('Faltan datos');
    }
    const newUser = {
      name,
      username,
      email,
      jobTitle,
      share,
    };
    store.add(newUser);
    resolve(newUser);
  });
};

const getUsers = (filter) => {
  return new Promise((resolve, reject) => {
    const newfilter = {};
    if (filter) {
      newfilter.name = filter;
    }
    resolve(store.get(newfilter));
  });
};

const updateUser = (id, name, username, email, jobTitle, share) => {
  return new Promise(async (resolve, reject) => {
    const oldUser = await getUsers(name);
    console.log(oldUser);
    const updateUser = {
      name: name ? name : oldUser.name,
      username: username ? username : oldUser.username,
      email: email ? email : oldUser.email,
      jobTitle: jobTitle ? jobTitle : oldUser.jobTitle,
      share: share ? share : oldUser.share,
    };
    resolve(store.update(id, updateUser));
  });
};

const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Falta datos');
    }
    resolve(store.delete(id));
  });
};

module.exports = {
  addUser,
  getUsers,
  updateUser,
  deleteUser,
};
