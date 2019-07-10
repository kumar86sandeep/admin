import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { CoreModule } from '../core/core.module';

//importing intercepters
import { ApiIntercepter } from '../core/intercepters/api.intercepter';
import { TokenInterceptor } from '../core/intercepters/token.interceptor';
import { HttpErrorInterceptor } from '../core/intercepters/http-error.interceptor';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ 
   
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiIntercepter, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor, multi: true
    }
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
