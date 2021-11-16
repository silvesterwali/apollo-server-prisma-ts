import { Context } from '../Context';
import { Category, Note, Post, Profile, User } from '../interfaceType';

interface queryUser {
  id?: number;
}
interface inputNote {
  content: string;
}
export const resolvers = {
  Query: {
    hello: () => 'hello',
    users: async (_parent: any, _args: any, ctx: Context): Promise<User[]> => {
      return (await ctx.prisma.user.findMany()) as User[];
    },
    user: async (
      _parent: any,
      args: queryUser,
      ctx: Context
    ): Promise<User> => {
      return (await ctx.prisma.user.findFirst({
        where: {
          id: args.id,
        },
      })) as User;
    },
    posts: async (_parent: any, _args: any, ctx: Context): Promise<Post[]> => {
      return (await ctx.prisma.post.findMany()) as Post[];
    },
    notes: async (_parent: any, _args: any, ctx: Context): Promise<Note[]> => {
      return (await ctx.prisma.notes.findMany()) as Note[];
    },
  },
  Mutation: {
    createNote: async (
      _parent: any,
      args: inputNote,
      ctx: Context
    ): Promise<Note> => {
      return await ctx.prisma.notes.create({
        data: {
          content: args.content,
        },
      });
    },
  },
  post: {
    author: async (parent: Post, _args: any, ctx: Context): Promise<User> => {
      return (await ctx.prisma.user.findFirst({
        where: {
          id: parent.id,
        },
      })) as User;
    },
  },
  user: {
    profile: async (
      parent: User,
      _args: any,
      ctx: Context
    ): Promise<Profile> => {
      return (await ctx.prisma.profile.findFirst({
        where: {
          userId: parent.id,
        },
      })) as Profile;
    },
  },
  role: {
    USER: 'USER',
    ADMIN: 'ADMIN',
  },
};
