const UsersController = {
  index:  async (ctx) => {
    // ctx.status = 200;
    // ctx.body = {total:0, count: 0, rows:[]}
    // return ctx;
    console.log('list');
  },

  create: () => {
    console.log('created');
  },

  update: () => {
    console.log('updated');
  },
  
  delete: () => {
    console.log('deleted');
  }
}

module.exports = UsersController;
