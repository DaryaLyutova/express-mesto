const router = require('express').Router();
const { getUsers, getUser, postUser } = require('../controles/users');

router.get('/users', getUsers);

router.get('/users/:_id', getUser);

router.post('/users', postUser);

module.exports = router;
