import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTodoComponent } from './add-todo.component';
import { TodoListModule } from '../todo-list/todo-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoListModule
  ],
  declarations: [AddTodoComponent],
  exports: [AddTodoComponent]
})
export class AddTodoComponentModule {}
