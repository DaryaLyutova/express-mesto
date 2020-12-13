const Card = require('../models/card');

const getCards = (req, res) => {
  Card.find({}).populate('owner')
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch((err) => { res.status(500).send(err); });
};

const getCard = (req, res) => {
  Card.findOne({ _id: req.params })
    .then((card) => {
      if (!card) {
        return res.status(404).send(JSON.parse({ message: 'Нет пользователя с таким id' }));
      }
      return res.status(200).send({ card });
    })
    .catch(() => { res.status(400).send({ message: 'Что-то пошло не так' }); });
};

const createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => { res.send({ body: card }); })
    .catch(() => { res.status(500).send({ message: 'Произошла ошибка' }); });
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params._id)
    .then((card) => { res.send({ data: card }); })
    .catch(() => { res.status(500).send({ message: 'Произошла ошибка' }); });
};

module.exports = {
  getCards, getCard, createCard, deleteCard,
};
