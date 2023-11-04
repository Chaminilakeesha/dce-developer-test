import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ListViewComponent } from './components/list-view/list-view.component';

@NgModule({
  declarations: [AppComponent, UserRegistrationComponent, NavBarComponent, ListViewComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
