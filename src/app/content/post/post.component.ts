import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  author = {
    name: 'Test',
    handle: '@Test'
  };
  date = '01/01/2021';

  content = {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque nisl ut turpis vulputate commodo. Donec at maximus velit. Aliquam interdum, leo non dapibus iaculis, libero nulla laoreet urna, nec congue orci libero in velit."
  }

  constructor() { }

  ngOnInit(): void {
  }

}
