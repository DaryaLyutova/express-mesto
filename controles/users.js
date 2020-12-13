const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => { res.status(200).send(users); })
    .catch((err) => { res.status(400).send(err); });
};

const getUser = (req, res) => {
  User.findOne({ _id: req.params })
    .then((user) => {
      if (!user) {
        return res.status(404).send(JSON.parse({ message: 'Нет пользователя с таким id' }));
      }
      return res.status(200).send({ user });
    })
    .catch(() => { res.status(400).send({ message: 'Что-то пошло не так' }); });
};
const postUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => { res.send({ body: user }); })
    .catch(() => { res.status(500).send({ message: 'Произошла ошибка' }); });
};

module.exports = { getUsers, getUser, postUser };
