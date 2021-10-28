import { Component, OnInit } from '@angular/core';
import { Todo } from './components/todo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  todos: Todo[];
  constructor() {}

  ngOnInit() {
    this.todos = localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem('todos')) as Todo[] : [] as Todo[];
  }

}
