const { UserList } = require('../FakeData');

const resolvers = {
  Query: {
    users: () => UserList,
  },
};

module.exports = { resolvers };
