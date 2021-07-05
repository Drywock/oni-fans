import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: any;
  //  {
  //   author: {
  //     name: string,
  //     handle: string
  //   },
  //   date: string,
  //   content: {
  //     text: string,
  //     img: string
  //   }
  // };

  hidder: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.hidder = this.post.content.isLewd
  }

  public onShow(): void {
    this.hidder = false;
  }
}
