import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {Overlay} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';

@Component({
  selector: 'qn-sass-basic',
  templateUrl: './sass-basic.component.html',
  styleUrls: ['./sass-basic.component.scss']
})
export class SassBasicComponent implements OnInit {

  constructor(
    private _nzMsg: NzMessageService,
    private _overlay: Overlay
  ) { }

  ngOnInit() {
    this._nzMsg.info('你已进入Sass练习界面！');
    //this._overlay.create({hasBackdrop: true, backdropClass: 'backdrop'}).attach(new ComponentPortal(SassBasicComponent));
  }

}
