import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TablePageComponent } from '../table-page/table-page.component';
import { LoginPageComponent } from '../login-page/login-page.component';

const routes: Routes = [

  { path: 'table-page', component:TablePageComponent },
  {path: '', 
   redirectTo: 'login-page', 
   pathMatch: 'full' },
  // { path: 'login-page', component:LoginPageComponent },
  
];
@NgModule({
  declarations: [],
  imports: [  CommonModule,RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
