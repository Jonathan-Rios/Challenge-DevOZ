const  { uuid } = require('uuidv4');

const UsersRepository = {
  users: [],
 
  findAllUsers: (id) => {
    const users = UsersRepository.users;

    return users;
  },
   
  create: (userData) => {
    const user = { id: uuid(), ...userData };

    UsersRepository.users.push(user);

    return user;
  },
   
  update: (user) => {
    const findIndex = UsersRepository.users.findIndex(findUser => findUser.id === user.id);
    
    UsersRepository.users[findIndex] = user;

    return user;
  },
     
  delete: (user) => {
    const users = UsersRepository.users.filter(findUser => findUser.id !== user.id);
    
    UsersRepository.users = users;
  }
}

module.exports = UsersRepository;
