import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';
import { TodoListComponent } from './todo-list.component';
import { TodoModule } from '../todo/todo.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TodoModule
  ],
  declarations: [TodoListComponent],
  exports: [TodoListComponent]
})
export class TodoListModule {}
