import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, map, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-multi-screen',
  templateUrl: './multi-screen.component.html',
  styleUrls: ['./multi-screen.component.scss']
})
export class MultiScreenComponent {
  public stepDisplay = {
    info: true,
    login: false,
  };

  public form = this._fb.group({
    info: this._fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    }),
    login: this._fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    }),
  });

  get infoForm(): FormGroup {
    return this.form.controls.info;
  }
  get LoginForm(): FormGroup {
    return this.form.controls.login;
  }
  public formUpdates$ = this.form.valueChanges.pipe(
    startWith(this.form.value),
    map((value) => {
      return {
        ...value,
        valid: this.form.valid,
      };
    })
  );

  constructor(private _fb: FormBuilder) {}
  ngOnInit() { }

  goToStep(step: string) {
    this.stepDisplay.info = false;
    this.stepDisplay.login = false;

    step === 'login' ? this.stepDisplay.login = true : this.stepDisplay.info = true;
  }
  // submit() {
  //   if (this.form.valid) {
  //     console.log(this.form.value);
  //   }
  // }
}
