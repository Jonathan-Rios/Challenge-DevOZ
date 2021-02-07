const usersRouter = require('koa-router')();
const bodyParser = require('koa-body')();
const userController = require('../controllers/userController');

usersRouter.get('/',userController.index);
usersRouter.post('/', bodyParser, userController.create);
usersRouter.put('/', bodyParser, userController.update);
usersRouter.delete('/:id', userController.delete);

module.exports = usersRouter;