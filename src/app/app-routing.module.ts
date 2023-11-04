import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  { path: 'register', component: UserRegistrationComponent },
  { path: 'allusers', component: ListViewComponent },
  { path: 'edituser/:id', component: UpdateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }