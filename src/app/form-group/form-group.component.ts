import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent {
  public form = this._fb.group({
    todos: this._fb.array([], [Validators.required]),
  });

  public isValid = false;
  public completeForm$ = {}

  get todosFormArray(): FormArray {
    return this.form.controls.todos as FormArray;
  }

  get todosArrayFormGroups(): FormGroup[] {
    return this.todosFormArray.controls as FormGroup[];
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
  constructor (private _fb: FormBuilder) { }
  submit() {
    this.isValid = this.form.valid;
    if(this.isValid){
      this.completeForm$ = this.form.value
    }
  }

  addTodoFormGroup() {
    const newTodoGroup = this._fb.group({
      title: ['', [Validators.required]],
      complete: false,
    });

    this.todosFormArray.push(newTodoGroup);
  }

  removeFormGroup(index: number) {
    this.todosFormArray.removeAt(index);
  }
}
