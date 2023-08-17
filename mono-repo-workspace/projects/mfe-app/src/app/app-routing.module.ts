import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/home/todo-list.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'todo-mfe', pathMatch: 'full'
  },
  {
    path:'todo-mfe', component: TodoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }