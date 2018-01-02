import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_MESSAGE_CONFIG} from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {SignInComponent} from './sign-in/sign-in.component';
import {CanLoadService} from './shared/guards/can-load.service';
import {LoginDataService} from './shared/data-cache/login-data.service';
import {SignInService} from './sign-in/sign-in.service';
import {MyHttpInterceptorService} from './shared/interceptor/my-http-interceptor.service';
import {UtilService} from './shared/util/util.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SignInComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot({ extraFontName: 'anticon', extraFontUrl: './assets/fonts/iconfont' })
  ],
  bootstrap: [AppComponent],
  providers: [CanLoadService, LoginDataService, SignInService, UtilService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptorService,
      multi: true
    },
    {
      provide: NZ_MESSAGE_CONFIG,
      useValue: {
        nzDuration             : 5000,//持续时间
        nzMaxStack             : 7,//最大显示个数
        nzPauseOnHover         : false,
        nzAnimate              : true
      }
    },
  ]
})
export class AppModule { }
