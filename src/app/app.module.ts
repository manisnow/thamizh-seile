import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { CustomMaterialModule } from './core/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './core/app.routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AvatarModule } from 'ngx-avatar';
import { FileSelectDirective } from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    FileSelectDirective  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AvatarModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
