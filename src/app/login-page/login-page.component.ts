import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import UserData from '../../assets/mocks/login.json'

 export interface UserRecord{
  data:{
    username:string,
    password:string,
  }
 
}
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  credentials: {username: string, password: string};
  constructor(public router: Router,    private toastr: ToastrService, 

  ) { }

  ngOnInit(): void {

  }
   record: UserRecord = UserData
 
  loginClicked(name,userpassword) {
  
    if(name.value=='username' && userpassword.value=='password') {
      this.router.navigate(['table-page']);
 

    //   setTimeout(() => {
    //     this.router.navigate(['table-page']);
    // }, 3000);  
    }
    else{
      // alert("Please Fill Correct Details")
      this.toastr.error("Invalid Username Or Password",'',{closeButton: true,timeOut: 2000,positionClass: 'toast-top-full-width'});
      return ;
      window.location.reload();
    
     
    }
  
    
    
  
  }
}

