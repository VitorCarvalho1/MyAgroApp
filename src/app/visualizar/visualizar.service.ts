import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.API;


@Injectable({
  providedIn: 'root'
})
export class VisualizarService {

  private readonly API = `${API}/users`

  constructor(private http: HttpClient) { }


  listarCards():Observable<any>{
    return this.http.get<any>(this.API)
  }
}
