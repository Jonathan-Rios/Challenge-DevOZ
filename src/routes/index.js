const Router = require('koa-router');

const usersRouter = require('../modules/users/infra/http/routes/users.routes');

var router = new Router();

router.use('/users', usersRouter.routes());

// //rota simples pra testar se o servidor está online
router.get('/', async (ctx) => {
    ctx.body = `Seu servidor esta rodando em ${process.env.APP_API_URL}`; //http://localhost:3000/
});

module.exports = router;