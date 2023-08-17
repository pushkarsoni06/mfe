import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoListComponent } from './home/todo-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TodoListComponent,
        pathMatch: 'full'
      }
    ])
  ],
  providers: []
})
export class TodoListModule { }
