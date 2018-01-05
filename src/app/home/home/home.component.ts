import {Component, HostBinding, HostListener, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'qn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None//去除作用域标记
})
export class HomeComponent implements OnInit {
  params: string = '2222';

  value: number = 3;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click', ['$event', 'params'])
  onClick(e, params) {
    console.log(e, params);
  }

  @HostBinding('style.background')
  get getStyle() {
    return `#ddd`;
  }

  @HostBinding('class.container')
  get getClass() {
    return true;
  }

}
