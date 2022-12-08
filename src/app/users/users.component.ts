import { Component, OnInit } from '@angular/core';
import { Visualizar } from './../visualizar/visualizar';
import { VisualizarService } from './../visualizar/visualizar.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  card:Visualizar[]=[]

  constructor(private service: VisualizarService) { }

  ngOnInit(): void {
    this.service.listarCards().subscribe((event)=>{
      this.card = event.result as Visualizar[]
      console.log(this.card)
    })
  }

 

}
