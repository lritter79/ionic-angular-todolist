import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() todoIdToDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  deleteTodo(todoId: number) {
    //console.log(todoId);
    //console.log(this.todos);
    //this.todos = this.todos.filter(todo => todo.id !== todoId).map((oldTodo, i) => ({color: oldTodo.color, text: oldTodo.text, id: i}));
    //console.log(this.todos);
    this.todoIdToDelete.emit(todoId);
  }
}
