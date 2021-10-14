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
    console.log(this.todo.color);
    //const el = document.querySelector<HTMLElement>('.todo-text');
    //el.style.setProperty('color', );
  }
  toggleShowNotes(notes: boolean) {
    this.showNotes = !notes;
  }

  deleteTodo(todoId: number) {
    //emit passes todoId to the parent component, which eventually passes it to the grand parent where the todo array is stored
    this.todoIdToDelete.emit(todoId);
  }
}
