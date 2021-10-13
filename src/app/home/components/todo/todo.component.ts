import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Input() indexOfElement: number;
  @Output() todoIdToDelete = new EventEmitter<number>();
  showNotes = true;
  constructor() { }

  ngOnInit() {
    const el = document.querySelector<HTMLElement>('.todo-text');
    el.style.setProperty('--ion-background', this.todo.color);
  }
  toggleShowNotes(notes: boolean) {
    this.showNotes = !notes;
  }
  deleteTodo(todoId: number) {
    //console.log(todoId);
    //console.log(this.todos);
    //this.todos = this.todos.filter(todo => todo.id !== todoId).map((oldTodo, i) => ({color: oldTodo.color, text: oldTodo.text, id: i}));
    //console.log(this.todos);
    this.todoIdToDelete.emit(todoId);
  }
}
