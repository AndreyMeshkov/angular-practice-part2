import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  search: '';
  field = 'title';

  posts: Post[] = [
    {title: 'Beer', text: 'The best drink in the world'},
    {title: 'Bread', text: 'The best food in the world'},
    {title: 'JavaScript', text: 'The best language in the world'},
  ];

  addPost() {
    this.posts.unshift({
      title: 'Angular 9',
      text: 'Practice Angular course'
    });
  }

}
