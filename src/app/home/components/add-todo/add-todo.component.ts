import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  @Input() todos: Todo[];
  todoText: string;
  constructor() { }
  addTodo(){
    const color = `rgb(${this.randomNumber(0, 255)}, (${this.randomNumber(0, 255)}, (${this.randomNumber(0, 255)})`;
    this.todos.push({color, text:this.todoText, id: this.todos.length});
    console.log(this.todos);
    this.todoText = '';
  }

  randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

removeTodo(id: number) {
  this.todos = this.todos.filter(todo => todo.id !== id).map((oldTodo, i) => ({color: oldTodo.color, text: oldTodo.text, id: i}));

}

  ngOnInit() {
    this.todoText='';
  }



}
