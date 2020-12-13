const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => { res.status(200).send(users); })
    .catch((err) => { res.status(400).send(err); });
};

const getUser = (req, res) => {
  User.findById(req.params._id)
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

const getMe = (req, res) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        return res.status(404).send(JSON.parse({ message: 'Нет пользователя с таким id' }));
      }
      return res.status(200).send({ user });
    })
    .catch(() => { res.status(400).send({ message: 'Что-то пошло не так' }); });
};

const updateUser = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => { res.send({ data: user }); })
    .catch(() => { res.status(500).send({ message: 'Произошла ошибка' }); });
};

const updateAvatar = (req, res) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => { res.send({ data: user }); })
    .catch(() => { res.status(500).send({ message: 'Произошла ошибка' }); });
};

module.exports = {
  getUsers, getUser, postUser, getMe, updateUser, updateAvatar,
};
