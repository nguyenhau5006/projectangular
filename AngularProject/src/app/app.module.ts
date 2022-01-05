import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';



// import module cho Firebase
// import { AngularFireModule } from '@angular/fire';
// 		import { AngularFirestoreModule } from '@angular/fire/firestore';
// 		import { environment } from '../environments/environment';
// 		import { AngularFireAuthModule } from '@angular/fire/auth';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { NgxPaginationModule } from 'ngx-pagination';
import { ItemNodeComponent } from './item-node/item-node.component';
import { InsertItemComponent } from './insert-item/insert-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SignupComponent } from './signup/signup.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ItemNodeComponent,
    InsertItemComponent,
    LoginComponent,
    MainLayoutComponent,
    LoginLayoutComponent,
    NotFoundPageComponent,
    SignupComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // khai báo import
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
