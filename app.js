const express = require('express');
const mongoose = require('mongoose');

const app = express();
const path = require('path');

const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');
const errorRouter = require('./routes/errorUrl');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', cardsRouter);
app.use('/', usersRouter);
app.use('/', errorRouter);

app.listen(PORT, () => {
  console.log(`On port ${PORT}`);
});
