export interface User {
  id: number;
  name: string;
  email: String;
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
