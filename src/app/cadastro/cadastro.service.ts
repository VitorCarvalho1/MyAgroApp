import { Cadastro } from './cadastro';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';


const API = environment.API;

@Injectable({
  providedIn: 'root'
})

export class CadastroService {

  private readonly API =  `${API}/users`

  constructor(private http: HttpClient) { }

  cadastrarNewCard(novoCampo: Cadastro){
    return this.http.post(`${API}/user`, novoCampo);
  }
}
