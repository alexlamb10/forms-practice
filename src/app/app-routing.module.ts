import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { AppComponent } from './app.component';

const routes: Routes = [{path: 'simpleForm', component:SimpleFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
