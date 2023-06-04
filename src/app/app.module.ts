import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';
import { HomeComponent } from './home/home.component';
import { MatDialogModule } from '@angular/material/dialog'
 
@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
