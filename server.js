const express = require('express');
const cors = require('cors');

const { port, user, password, host, db_name } = require('./config');
const router = require('./network/routes');
const db = require('./db');

const realPort = port || 3000;

const urlDatabase = `mongodb+srv://${user}:${password}@${host}/${db_name}?retryWrites=true&w=majority`;
db(urlDatabase);

const app = express();
app.use(cors());
app.use(express.json());
router(app);

app.listen(realPort, () => {
  console.log(`Server listening in http://localhost:${realPort}`);
});
