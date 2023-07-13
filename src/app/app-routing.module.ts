import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { AppComponent } from './app.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { MultiScreenComponent } from './multi-screen/multi-screen.component';

const routes: Routes = [{path: 'simpleForm', component:SimpleFormComponent},
                        {path: 'formGroup', component:FormGroupComponent},
                        {path: 'multiScreen', component:MultiScreenComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
