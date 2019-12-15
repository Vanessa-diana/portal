import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeguradosComponent } from './segurados/segurados.component';


const routes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'segurados',component:SeguradosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
