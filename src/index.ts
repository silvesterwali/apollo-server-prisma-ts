import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { context } from './Context';
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.listen(4000, () => {
  console.log('server running in 4000');
});
