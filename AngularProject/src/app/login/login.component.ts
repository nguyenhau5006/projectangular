import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  tryGoogleLogin(){
    this.auth.signinGmail().then(res=>{
      // this.router.navigate(["/home"]);
        // location.href = "/home"
        this.router.navigate(['admin/main']);
            }).catch(err=>{
              console.log("Thông báo lỗi!",err); 
     
    })
  }


}
