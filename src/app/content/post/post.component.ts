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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque nisl ut turpis vulputate commodo. Donec at maximus velit. Aliquam interdum, leo non dapibus iaculis, libero nulla laoreet urna, nec congue orci libero in velit. Duis dictum magna placerat, iaculis purus ac, ultrices felis. In enim ex, condimentum non metus et, congue tempus sem. Phasellus eget ante blandit, placerat risus vitae, eleifend justo. Duis eu faucibus dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lobortis, nisi eu commodo consectetur, lorem lorem efficitur ligula, sed ullamcorper sem magna ut mi. Nulla ullamcorper quam orci, non varius dui venenatis non. Phasellus nisi augue, pharetra id luctus vel, vestibulum rhoncus enim. Integer pulvinar bibendum posuere. Morbi accumsan est quis purus tempus ultrices. Proin in sem et turpis vulputate elementum sed ut mi. "
  }

  constructor() { }

  ngOnInit(): void {
  }

}
