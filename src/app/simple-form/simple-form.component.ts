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

  public formUpdates$ = {}
  // this.form.valueChanges.pipe(
  //   startWith(this.form.value),
  //   map((formValues) => {
  //     return { ...formValues, valid: this.form.valid };
  //   })
  // );

  public isValid = false;

  submit() {
    console.log(this.form.value)
    this.isValid = this.form.valid;
    this.formUpdates$ = this.form.value
  }

  constructor(private _fb: FormBuilder) { }
}
