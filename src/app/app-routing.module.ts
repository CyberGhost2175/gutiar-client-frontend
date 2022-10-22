import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { GuitarComponent } from './component/guitar/guitar.component';
import { HomeComponent } from './component/home/home.component';
import { ListComponent } from './component/list/list.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';

const routes: Routes = [
  {path: '', redirectTo:'guitars', pathMatch: 'full'},
  {path: 'guitars', component: ListComponent},
  {path:'cart', component:CartComponent},
  {path:'contacts',component: ContactsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path:'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
