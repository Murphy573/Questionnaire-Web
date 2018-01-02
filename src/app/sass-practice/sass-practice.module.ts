import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SassBasicComponent } from './sass-basic/sass-basic.component';
import {SassPracticeRoutingModule} from './sass-practice-routing.module';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  imports: [
    CommonModule,
    SassPracticeRoutingModule,
    OverlayModule
  ],
  declarations: [SassBasicComponent]
})
export class SassPracticeModule { }
