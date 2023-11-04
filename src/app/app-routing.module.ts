import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { ListViewComponent } from './components/list-view/list-view.component';

const routes: Routes = [
  { path: 'register', component: UserRegistrationComponent },
  { path: 'allusers', component: ListViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }