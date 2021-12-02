import { gql } from 'apollo-server';

export const typeDefs = gql`
  """
   Type of user . please don't waste your time here
  """
  type user {
    id: Int
    email: String
    name: String
    profile: profile
    role: role
    posts: [post]
    totalPost: Int
    offices: [office]
    families:[family]
  }

  type office {
    id: Int!
    userId: Int!
    code: String
    description: String
    user:user
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

  type family{
    id:Int!
    relation: familyRelation!
    fullName: String!
    phone: String
    userId: Int!
    user:user!

  }

  enum familyRelation{
    SPOUSER
    FIRST_CHILD
    SECOND_CHILD
    THIRD_CHILD
  }

  input inputPost {
    title: String!
    content: String!
    published: Boolean!
    authorId: Int!
  }
  input inputProfile{
    userId:Int!
    bio:String!
  }

  input inputOffice {
    userId: Int!
    code: String!
    description: String!
  }

  input inputFamily {
    fullName: String!
    phone: String!
    userId: Int!
    relation: familyRelation
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
    categories: [category]
    families:[family]
    family(familyId: Int!):family
    hello: String
    notes: [note]
    posts: [post]
    user(id: Int!): user
    users: [user]

  }
  
  type Mutation {
    createFamily(input:inputFamily!):family
    createNote(content: String!): note
    createOffice(input:inputOffice!): office
    createUser(name: String!, email: String!): user
    createPostCategory(name: String!): category
    createPost(input: inputPost!): post
    createProfile(input:inputProfile!): profile
    deleteFamily(familyId:Int!):family
    deletePost(postId: Int!): post
    updatePost(postId: Int!, input: inputPost!): post
  }
`;
