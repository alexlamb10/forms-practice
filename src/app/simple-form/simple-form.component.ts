import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent {
  public form = this._fb.group({
    firstName: ["",[Validators.required]],
    lastName: ["",[Validators.required]],
    dob: ["",[Validators.required]],
    subscribe: false,
  })
  public completeForm$ = {}

  public isValid = false;

  submit() {
    this.isValid = this.form.valid;
    if(this.isValid){
      this.completeForm$ = this.form.value
    }
  }

  constructor(private _fb: FormBuilder) { }
}
