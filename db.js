const db = require('mongoose');

db.Promise = global.Promise;

const connect = async (urlDatabase) => {
  try {
    await db.connect(urlDatabase, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('[DB] Conectada con éxito');
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
