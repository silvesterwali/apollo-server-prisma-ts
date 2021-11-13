import { gql } from 'apollo-server';

export const typeDefs = gql`
  type user {
    id: Int
    email: String
    name: String
    profile: profile
  }

  type profile {
    id: Int!
    bio: String
    userId: Int!
  }

  type post {
    id: Int!
    title: String
    content: String
    published: Boolean
    createdAt: String
    updatedAt: String
    author: user
  }

  type Query {
    hello: String
    users: [user]
    user(id: Int!): user
    posts: [post]
  }
`;
