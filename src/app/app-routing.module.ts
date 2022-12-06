import { UsersComponent } from './users/users.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component:CadastroComponent},
  {path: 'visualizar', component: VisualizarComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
