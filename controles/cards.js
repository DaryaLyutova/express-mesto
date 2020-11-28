const path = require('path');
const getDataInfo = require('../helpers/helpers');

const dataCardsPath = path.join(__dirname, '../data/cards.json');

// eslint-disable-next-line arrow-body-style
const getCards = (req, res) => {
  return getDataInfo(dataCardsPath)
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch((err) => { res.status(400).send(err); });
};

module.exports = getCards;
