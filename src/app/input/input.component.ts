import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <h1>
  {{title}}
</h1>
<input [value]="generateNewTitle()"
  #Anna>
<button (click)="changeTitle(Anna.value)">Save</button>
<p>The title is: {{ title }}</p>
<ol>
<li *ngFor="let item of todoList">
{{item.title}}
</li>
</ol>
`,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
title = 'Hello';
public todoList = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];
  constructor() {
    this.changeTitle('Angular is awesome');
    console.log('after changing the title');
}
changeTitle(newTitle: string): void {
  this.title = newTitle;
}

  ngOnInit() {
  }
generateNewTitle(): string {
return 'This is awesome';
}
}
