import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AddTodoComponentModule } from './components/add-todo/add-todo.module';
import { TodoListModule } from './components/todo-list/todo-list.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AddTodoComponentModule,
    TodoListModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
