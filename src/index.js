const { ApolloServer } = require('apollo-server');

const { resolvers } = require('./schema/resolvers.js');
const { typeDefs } = require('./schema/type-defs.js');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => req,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
