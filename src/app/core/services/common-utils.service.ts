import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { ToastrManager } from 'ng6-toastr-notifications';//toaster class

//import shared services
//import { PageLoaderService } from '../../shared/_services'

import { environment } from '../../../environments/environment'

import Swal from 'sweetalert2'

@Injectable()
export class CommonUtilsService { 

  constructor(private httpClient: HttpClient ) { }

  
  /**
  * Show alert on success response & hide page loader
  * @return void
  */
  public onSuccess(message): void {
    //this.pageLoaderService.pageLoader(false);//hide page loader
   // this.pageLoaderService.setLoaderText('');//setting loader text empty
    //this.toastrManager.successToastr(message, 'Success!'); //showing success toaster 
  }

  /**
  * Show alert on error response & hide page loader
  * @return void
  */
  public onError(message): void {
   // this.pageLoaderService.setLoaderText(environment.MESSAGES.ERROR_TEXT_LOADER);//setting loader text
    //this.pageLoaderService.pageLoader(false);//hide page loader
    //this.toastrManager.errorToastr(message, 'Oops!',{maxShown:1});//showing error toaster message  
  }

}