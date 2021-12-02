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

export interface Office{
  id:number;
  userId:number;
  code:string;
  description:string;
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

export enum FamilyRelation{
  SPOUSE="SPOUSE",
  FIRST_CHILD="FIRST_CHILD",
  SECOND_CHILD="SECOND_CHILD",
  THIRD_CHILD="THIRD_CHILD"
}
export interface Family{
  id:number;
  relation:FamilyRelation;
  fullName:string;
  phone:string;
  userId: number;
}


export interface Category {
  id: number;
  name: string;
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}
