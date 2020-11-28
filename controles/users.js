const path = require('path');
const getDataInfo = require('../helpers/helpers');

const dataUsersPath = path.join(__dirname, '../data/users.json');

// eslint-disable-next-line arrow-body-style
const getUsers = (req, res) => {
  return getDataInfo(dataUsersPath)
    .then((users) => { res.status(200).send(users); })
    .catch((err) => { res.status(400).send(err); });
};

// eslint-disable-next-line arrow-body-style
const getUser = (req, res) => {
  return getDataInfo(dataUsersPath)
    .then((users) => {
      res.status(200).send(users.id);
    })
    .catch(() => { res.status(400).send({ error: 'Такого пользователя нет' }); });
};

module.exports = { getUsers, getUser };
