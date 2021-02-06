const Router = require('koa-router');

const usersRouter = require('../modules/users/infra/http/routes/users.routes');

var router = new Router();

router.use('/users', usersRouter.routes());

module.exports = router;