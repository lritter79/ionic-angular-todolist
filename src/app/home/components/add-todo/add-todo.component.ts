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
  showTextHint = false;

  constructor(public formBuilder: FormBuilder) {
    this.todoForm = new FormGroup({
      //Validators.compose takes multiple vaidators with differetnt rules sets and bundles them
      todoText: new FormControl('',  Validators.compose([Validators.required, Validators.minLength(4)])),
      todoNotes: new FormControl('')
    });
   }
   //call this method on submit for the form
  addTodo(): void {
    if(this.todoForm.valid){
      const color = `rgb(${this.randomNumber(0, 255)}, ${this.randomNumber(0, 255)}, ${this.randomNumber(0, 255)})`;
      //get() takes in the comntrol's name
      const newTodo = {color,
        text:this.todoForm.get('todoText').value,
        id: this.todos.length,
        notes: this.todoForm.get('todoNotes').value,
        isCompleted: false
      };
      this.todos.push(newTodo);
      console.log(this.todos);
      this.todoForm.reset();
      this.showTextHint = false;
  } else {
    this.showTextHint = true;
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
  return {...oldTodo, id:i};
}

  ngOnInit() {

  }



}
