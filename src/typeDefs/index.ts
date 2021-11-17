import { gql } from 'apollo-server';

export const typeDefs = gql`
  type user {
    id: Int
    email: String
    name: String
    profile: profile
    role: role
    posts: [post]
    totalPost: Int
  }

  type profile {
    id: Int!
    bio: String
    userId: Int!
  }

  type note {
    id: Int!
    content: String
    updatedAt: String
    createdAt: String
  }

  type post {
    id: Int!
    title: String
    content: String
    published: Boolean
    createdAt: String
    updatedAt: String
    authorId: Int!
    author: user
    categories: [category]
  }

  input inputPost {
    title: String!
    content: String!
    published: Boolean!
    authorId: Int!
  }

  type category {
    id: Int!
    name: String
    post: [post]
  }

  enum role {
    USER
    ADMIN
  }

  type Query {
    hello: String
    users: [user]
    user(id: Int!): user
    posts: [post]
    notes: [note]
    categories: [category]
  }
  type Mutation {
    createNote(content: String!): note
    createUser(name: String!, email: String!): user
    createPostCategory(name: String!): category
    createPost(input: inputPost!): post
  }
`;
