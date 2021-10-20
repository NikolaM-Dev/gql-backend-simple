const _ = require('lodash');

const { MovieList, UserList } = require('../FakeData');

const resolvers = {
  Query: {
    // USERS RESOLVERS
    users: () => UserList,
    user: (_parent, { id }) => _.find(UserList, { id: Number(id) }),

    // MOVIES RESOLVERS
    movies: () => MovieList,
    movie: (_parent, { name }) => _.find(MovieList, { name }),
  },
  User: {
    favoriteMovies: () =>
      _.filter(
        MovieList,
        (movie) =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010,
      ),
  },

  Mutation: {
    createUser: (_parent, args) => {
      const user = args.input;
      const lastId = UserList[UserList.length - 1].id;

      user.id = lastId + 1;
      UserList.push(user);

      return user;
    },

    updateUsername: (_parent, args) => {
      const { id, newUsername } = args.input;
      let userUpdated;

      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUsername;
          userUpdated = user;
        }
      });

      return userUpdated;
    },

    deleteUser: (_parent, args) => {
      const { id } = args;

      _.remove(UserList, (user) => user.id === Number(id));

      return null;
    },
  },
};

module.exports = { resolvers };
