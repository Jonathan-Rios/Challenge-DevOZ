const UsersRepository = require('../../repositories/UserRepository');

const UsersController = {
  index: (ctx) => {
    ctx.status = 200;
    ctx.body = {
      rows: UsersRepository.findAllUsers()
    }

    return ctx;
  },

  create: async (ctx) => {
    const data = ctx.request.body;
    const user = await UsersRepository.create(data);
    
    ctx.status = 201;
    ctx.body = user;
    
    return ctx;
  },

  update: async (ctx) => {
    const data = ctx.request.body;
    const user = await UsersRepository.update(data);
    
    ctx.status = 200;
    ctx.body = user;
    
    return ctx;
  },
  
  delete: async (ctx) => {
    const data = ctx.request.params;
    await UsersRepository.delete(data);

    ctx.status = 204;

    return ctx;
  }
}

module.exports = UsersController;
