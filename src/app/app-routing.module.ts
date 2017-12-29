import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NgModule} from '@angular/core';
import {SelectivePreloadingStrategy} from './selective-preloading-strategy';
import {SignInComponent} from './sign-in/sign-in.component';
import {CanLoadService} from './shared/guards/can-load.service';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'main',
    loadChildren: 'app/main/main.module#MainModule',
    canLoad: [CanLoadService]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
