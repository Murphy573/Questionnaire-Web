import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { MyFormComponent } from './my-form/my-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroAntdModule,
    FormsModule
  ],
  declarations: [HomeComponent, MyFormComponent]
})
export class HomeModule { }
