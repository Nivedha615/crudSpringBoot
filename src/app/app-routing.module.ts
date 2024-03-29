import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserComponent } from './user/user.component';
import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [
   {path: 'users', component:UserComponent},
   {path: 'create-user', component: CreateUserComponent},
  {path:'', redirectTo:'users', pathMatch: "full"},
  {path: "update-user/:id", component: UpdateUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
