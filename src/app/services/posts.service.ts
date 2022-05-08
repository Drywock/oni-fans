import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import POSTS from 'src/assets/posts.json';

export interface IAccount {
  name: string;
  handle: string;
}

export interface IContent {
  text: string;
  img: string;
  isLewd: boolean;
}

export interface IAuthor {
  name: string;
  link: string;
}

export interface IPost {
    author: IAccount; 
    date: string,
    content: IContent;
    credit: IAuthor;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private _posts: Observable<IPost[]>;

  constructor() { 
    this._posts = of(POSTS);
  }

  getPosts(): Observable<IPost[]> {
    return this._posts;
  }
}
