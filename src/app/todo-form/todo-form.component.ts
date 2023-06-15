import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() index!: number;
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}
}
