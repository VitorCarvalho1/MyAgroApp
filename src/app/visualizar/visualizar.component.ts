import { Component, OnInit } from '@angular/core';
import { Visualizar } from './visualizar';
import { VisualizarService } from './visualizar.service';


@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.scss']
})
export class VisualizarComponent implements OnInit {

  card:Visualizar[]=[]

  constructor(private service: VisualizarService) { }

  ngOnInit(): void {
    this.service.listarCards().subscribe((event)=>{
      this.card = event.result as Visualizar[]
      console.log(this.card)
    })
  }
}
