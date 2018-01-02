import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
      },
      {
        path: 'sass-practice',
        loadChildren: 'app/sass-practice/sass-practice.module#SassPracticeModule'
      },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {
}
