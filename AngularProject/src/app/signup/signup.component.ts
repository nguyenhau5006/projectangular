import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../check/checkpassword';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email!:'';
  password!:'';
  confirmpassword!:'';
  frm!: FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthService) {
    this.frm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5)]],
      confirmpassword:['',[Validators.required,Validators.minLength(5)]]
    },{
      validator: MustMatch('password', 'confirmpassword')
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
    this.auth.signup(
      this.frm.controls.email.value,
      this.frm.controls.password.value
        ).then(res=>{
          console.log (res)});
          alert("Register is Success!");
          location.href = 'admin/main';
  }

  
}

