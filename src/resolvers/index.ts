import { Context } from '../Context';
import {
  Category,
  Family,
  InputUser,
  Note,
  Office,
  Post,
  Profile,
  User,
} from '../interfaceType';

interface queryUser {
  id?: number;
}
interface inputNote {
  content: string;
}
export const resolvers = {
  Query: {
    
    families:async(_parent:unknown,_args:unknown,ctx:Context):Promise<Family[]> =>{
      return (await ctx.prisma.family.findMany()) as Family[]; 
    },
    family:async(_parent:unknown,args:{familyId:number},ctx:Context):Promise<Family> =>{
      return (await ctx.prisma.family.findFirst({where:{
        id:args.familyId
      }}) ) as Family;
    },
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
    categories: async (
      _parent: any,
      _args: any,
      ctx: Context
    ): Promise<Category[]> => {
      return (await ctx.prisma.category.findMany({
        orderBy: {
          name: 'asc',
        },
      })) as Category[];
    },
  },
  Mutation: {
    createFamily:async(_parent:unknown,args:{input:Partial<Family>},ctx:Context):Promise<Family> =>{
      return await ctx.prisma.family.create({
        data: {
          userId:args.input.userId!,
          fullName: args.input.fullName!,
          relation:args.input.relation!,
          phone:args.input.phone!
        }
      }) as Family
    },
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
    createOffice:async(_parent:unknown,args:{input:Office},ctx:Context): Promise<Office> => {
      return await ctx.prisma.office.create({ 
        data:{
        userId: args.input.userId!,
        code: args.input.code!,
        description: args.input.description!
      }}) as Office
    },
    createPost: async (
      _parent: any,
      args: {
        input: {
          title: string;
          content: string;
          published: boolean;
          authorId: number;
        };
      },
      ctx: Context
    ): Promise<Post> => {
      return (await ctx.prisma.post.create({
        data: {
          title: args.input.title,
          content: args.input.content,
          published: args.input.published,
          authorId: args.input.authorId,
        },
      })) as Post;
    },
    createUser: async (
      _parent: any,
      args: InputUser,
      ctx: Context
    ): Promise<User> => {
      return (await ctx.prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
        },
      })) as User;
    },
    createPostCategory: async (
      _parent: any,
      args: { name: string },
      ctx: Context
    ): Promise<Category> => {
      return (await ctx.prisma.category.create({
        data: {
          name: args.name,
        },
      })) as Category;
    },
    createProfile: async (_parent:unknown,args:{ input:{userId:number,bio:string}},ctx:Context):Promise<Profile> => {
      return (await ctx.prisma.profile.create({
        data:{
          bio:args.input.bio,
          userId:args.input.userId
        }
      })) as Profile;
    },
    deletePost: async (
      _parent: any,
      args: { postId: number },
      ctx: Context
    ): Promise<Post> => {
      return (await ctx.prisma.post.delete({
        where: {
          id: args.postId,
        },
      })) as Post;
    },

    updatePost: async (
      _parent: any,
      args: {
        postId: number;
        input: {
          title: string;
          content: string;
          published: boolean;
          authorId: number;
        };
      },
      ctx: Context
    ): Promise<Post> => {
      return (await ctx.prisma.post.update({
        where: {
          id: args.postId,
        },
        data: {
          title: args.input.title,
          content: args.input.content,
          published: args.input.published,
          authorId: args.input.authorId,
        },
      })) as Post;
    },
   
  },
  family:{
    user:async(parent:Family,_args:unknown,ctx: Context):Promise<User> =>{
      return (await ctx.prisma.user.findFirst({where:{id:parent.userId}}))  as User;
    }
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
  role: {
    USER: 'USER',
    ADMIN: 'ADMIN',
  },
  user: {
    families:async(parent:User,_args:unknown,ctx:Context):Promise<Family[]> =>{
      return (await ctx.prisma.family.findMany({
        where:{
        userId:parent.id,
      }
    })) as Family[]
    },
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
    posts: async (
      parent: User,
      _args: undefined,
      ctx: Context
    ): Promise<Post[]> => {
      return (await ctx.prisma.post.findMany({
        where: { authorId: parent.id },
      })) as Post[];
    },
    totalPost: async (
      parent: User,
      _args: undefined,
      ctx: Context
    ): Promise<number | null> => {
      return await ctx.prisma.post.count({ where: { authorId: parent.id } });
    },
    offices:async(parent:User,_args:unknown,ctx: Context): Promise<Office[]> =>{
      return await ctx.prisma.office.findMany({
        where:{
          userId: parent.id
        }
      }) as Office[]
    }
  },
 
};
