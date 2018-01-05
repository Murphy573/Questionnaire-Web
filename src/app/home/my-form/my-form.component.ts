import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'qn-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyFormComponent),
      multi: true
    },
  ]
})
export class MyFormComponent implements OnInit, ControlValueAccessor  {
  _value: number = 0;

  myValueChange: Function = (value: number) => {};

  writeValue(value: number): void {
    this.value = value;
  }

  get value() {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
    this.myValueChange(this._value);
  }

  registerOnChange(fn: any): void {
    this.myValueChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }
}
