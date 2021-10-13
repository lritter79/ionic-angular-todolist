import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [TodoComponent],
  exports: [TodoComponent]
})
export class TodoModule {}
