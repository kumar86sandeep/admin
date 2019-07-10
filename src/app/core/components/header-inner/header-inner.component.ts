import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrManager } from 'ng6-toastr-notifications';//toaster class

//import services
import { AuthService } from '../../services'
import { environment } from '../../../../environments/environment'
@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html'
})
export class HeaderInnerComponent {
  

  constructor(private router: Router, private authService:AuthService){
    
  }
  logout(){
   
    //this.toastr.successToastr(environment.MESSAGES.LOGOUT_SUCCESS, 'Success!');//showing success toaster
    localStorage.removeItem('loggedinUser');
    localStorage.clear();
    this.authService.isLoggedIn(false, '');
    this.router.navigate(['/login']);   
  }
}
