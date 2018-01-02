import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import { MainComponent } from './main/main.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
