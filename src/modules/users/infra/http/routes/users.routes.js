const usersRouter = require('koa-router')();
const userController = require('../controllers/userController');

usersRouter.get('/',userController.index);
usersRouter.post('/',userController.create);
usersRouter.delete('/',userController.delete);
usersRouter.put('/',userController.update);

module.exports = usersRouter;