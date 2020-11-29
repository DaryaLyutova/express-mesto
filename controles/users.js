/* eslint-disable quotes */
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
    // eslint-disable-next-line arrow-body-style
    .then((users) => {
      return users.find((user) => (user._id === req.params.id));
    })
    .then((user) => {
      if (!user) {
        // eslint-disable-next-line quote-props
        return res.status(404).send(JSON.parse({ "message": "Нет пользователя с таким id" }));
      }
      return res.status(200).send(user);
    })
    // eslint-disable-next-line quote-props
    .catch(() => { res.status(400).send({ "message": "Что-то пошло не так" }); });
};

module.exports = { getUsers, getUser };
