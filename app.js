const express = require('express');

const app = express();
const path = require('path');

const PORT = 3000;

const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

// const dataCardsPath = path.join(__dirname, '..', 'data', 'cards.json');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', cardsRouter);
app.use('/', usersRouter);

app.listen(PORT, () => {
  console.log(`On port ${PORT}`);
});
