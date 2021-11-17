export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface InputUser {
  name: string;
  email: string;
}

export interface Profile {
  id: number;
  bio: String;
  userId: number;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Note {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: number;
  name: string;
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}
