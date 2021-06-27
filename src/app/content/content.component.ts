import { Component, OnInit } from '@angular/core';
import POSTS from 'src/assets/posts.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  post = POSTS;

  ngOnInit(): void {
  }

}
