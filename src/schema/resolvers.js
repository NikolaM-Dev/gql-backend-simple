const _ = require('lodash');

const { UserList } = require('../FakeData');

const resolvers = {
  Query: {
    // USERS RESOLVERS
    users: () => UserList,
    user: (_parent, { id }) => _.find(UserList, { id: Number(id) }),
  },
};

module.exports = { resolvers };
