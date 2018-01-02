/**
 * write by @pengfei.li
 */
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {SassBasicComponent} from './sass-basic/sass-basic.component';

const routes: Routes = [
  {
    path: '',
    component: SassBasicComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SassPracticeRoutingModule {}
