import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { SharingService } from './sharing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router:Router,
	private sharing: SharingService
    ) { }

	signup(email:string,password:string){
		return new Promise<any>((resolve, reject)=>{
			this.afAuth.createUserWithEmailAndPassword(email,password)
			  .then(res => {
				resolve(res);
			  }, err =>reject(err))
		  })
	}

	sigin(email: string, password:string){
		return new Promise<any>((resolve, reject) => {
		  this.afAuth.signInWithEmailAndPassword(email, password)
		  .then(res => {       
			console.log("Login Success!");
			resolve(res);
			//this.sharingService.isUserLoggedIn.next(true);
		  }, err => reject(err))
		})
	}

    async signinGmail(){
			var provider = new firebase.auth.GoogleAuthProvider();
			return await  this.afAuth.signInWithPopup(provider)
              .then(res=>{
				this.sharing.isUserLoggedIn.next(true);
                console.log(" da dang nhap thanh cong")
				//  this.router.navigate(['home']);
                // this.router.navigate(['home']);
				})
		}

    
    logout(){
			return new Promise<any>(async (resolve,reject)=>{
			  if (await this.afAuth.currentUser){
			  //if (this.fauth.auth.currentUser){
	  
				this.afAuth.signOut();
				this.sharing.isUserLoggedIn.next(false);
				resolve("log out");
			  }else{
				reject();
			  }
	  
			})
		}
}
