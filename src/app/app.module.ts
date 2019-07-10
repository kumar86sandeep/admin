import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { adminLteConf } from './admin-lte.conf';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LayoutModule } from 'angular-admin-lte';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';


import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

//importing intercepters
import { ApiIntercepter } from './core/intercepters/api.intercepter';
import { TokenInterceptor } from './core/intercepters/token.interceptor';
import { HttpErrorInterceptor } from './core/intercepters/http-error.interceptor';

//importing services
import { CommonUtilsService } from './core/services';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, 
    MaterialBarModule,
    NgxDatatableModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  providers: [ 
    CommonUtilsService,
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
  bootstrap: [AppComponent]
})
export class AppModule {}
