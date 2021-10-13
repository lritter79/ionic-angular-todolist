import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  @Input() todos: Todo[];
 // todoText: string;
  //todoNotes: string;

  //https://www.joshmorony.com/advanced-forms-validation-in-ionic-2/
  todoForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.todoForm = new FormGroup({
      todoText: new FormControl('',  Validators.compose([Validators.required, Validators.minLength(4)])),
      todoNotes: new FormControl('')
    });
   }
  addTodo(): void {
    if(this.todoForm.valid){
      const color = `rgb(${this.randomNumber(0, 255)}, ${this.randomNumber(0, 255)}, ${this.randomNumber(0, 255)})`;
      const newTodo = {color, text:this.todoForm.get('todoText').value, id: this.todos.length, notes: this.todoForm.get('todoNotes').value};
      this.todos.push(newTodo);
      console.log(this.todos);
      this.todoForm.reset();
  }

    //this.todoText = '';
    //this.todoNotes = '';
  }

  randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

removeTodo(id: number) {
  this.todos = this.todos.filter(todo => todo.id !== id).map((oldTodo, i) => (this.mapTodo(oldTodo, i)));

}

mapTodo(oldTodo: Todo, i: number): Todo {
  return {color: oldTodo.color, text: oldTodo.text, id: i, notes: oldTodo.notes};
}

  ngOnInit() {

  }



}
