import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SharingService } from '../services/sharing.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  displayName:string="";
  closebutton: any;
  user: any;
  constructor(private userService:UserService, 
              private auth:AuthService, 
              private router:Router,
              private sharing:SharingService) { 
               
                // this.sharing.isUserLoggedIn.subscribe(val=>{
                //   if(val) {
                //     this.userService.getCurrentUser()
					      //     .then(user=> this.displayName = user.displayName!=null? user.displayName: user.email);	
				        //   console.log(this.displayName);
                //   }
                //   else {
                //     this.displayName ='';
                //   }
                // })

                this.userService.getCurrentUser().then(user=> {
                  this.user = user;
                  console.log('user infor: ',user)
                  this.displayName = user.displayName!=null? user.displayName: user.email;
                  this.sharing.isUserLoggedIn.next(true);
                });
                console.log("display name: ",this.displayName);

  }

  ngOnInit(): void {

    this.sharing.isUserLoggedIn.subscribe(val=>{
      if(val) {
        this.userService.getCurrentUser()
        .then(user=> {
          this.user = user;
          console.log('user infor: ',user)
          this.displayName = user.displayName!=null? user.displayName: user.email;	
        });
      console.log("display name: ",this.displayName);
    } else {
        this.displayName ='';
      }
      console.log("display name: ",this.displayName ,"Value" ,val);
    })
  }

  logout(){
    this.auth.logout();
   // location.href="/itemlist";
    // this.closebutton.nativeElement.click();
    // location.href ="/home"
    this.router.navigate(["/login"])
  }
}
