import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro/cadastro.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    VisualizarComponent,
    MenuFooterComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
