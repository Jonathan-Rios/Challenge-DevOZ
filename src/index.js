//Voce deve rodar os testes usando:  npm test
//Para testar a aplicação, rode: npm run dev

//mais infos
//https://github.com/ZijianHe/koa-router

require('dotenv').config();
const router = require('./routes');

const PORT = process.env.PORT || 3000;
const Koa = require('koa');
const koa = new Koa();
 
koa
  .use(router.routes())
  .use(router.allowedMethods());

const server = koa.listen(PORT);

module.exports = server;