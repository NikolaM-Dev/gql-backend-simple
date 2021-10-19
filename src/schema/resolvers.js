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
};

module.exports = { resolvers };
