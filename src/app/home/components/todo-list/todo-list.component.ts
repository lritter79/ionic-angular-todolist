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
  @Output() updatedToDo = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit() {
    //console.log(this.todos[0]?.color);
  }

  deleteTodo(todoId: number) {
    //console.log(todoId);
    //console.log(this.todos);
    //this.todos = this.todos.filter(todo => todo.id !== todoId).map((oldTodo, i) => ({color: oldTodo.color, text: oldTodo.text, id: i}));
    //console.log(this.todos);
    this.todoIdToDelete.emit(todoId);
  }
  updateTodo(todo: Todo){
    console.log(todo);
    this.updatedToDo.emit(todo);
  }
}
