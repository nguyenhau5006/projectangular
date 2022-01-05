import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginLayoutComponent implements OnInit {

  email!:'';
  password!:'';
  frm!: FormGroup;
  constructor(private auth:AuthService, private router:Router,private fb:FormBuilder) {
    this.frm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5)]]
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.frm.invalid) {
      return;
    }
    console.log('email: ',this.frm.controls.email.value)
    console.log('Password: ',this.frm.controls.password.value)
      this.auth.sigin(
        this.frm.controls.email.value,
        this.frm.controls.password.value
          ).then(res=>{
              console.log (res)
              alert('login is success!');
              location.href = 'admin/main';
              }); 
              
  }

  tryGoogleLogin(){
    this.auth.signinGmail().then(res=>{
      // this.router.navigate(['admin/main']);
      location.href = 'admin/main';
            }).catch(err=>{
              console.log("Thông báo lỗi!",err); 
    })
  }
}
