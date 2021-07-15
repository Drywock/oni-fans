import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import POSTS from 'src/assets/posts.json';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  private sub = new Subscription;

  constructor(
    private postsService: PostsService,
  ) { }

  posts = POSTS;

  ngOnInit(): void {
    this.sub.add(this.postsService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
      }
    })
    )
  }

}
