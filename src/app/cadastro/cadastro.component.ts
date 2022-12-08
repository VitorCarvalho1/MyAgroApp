import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cadastro } from './cadastro';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  inputsCadastro!:FormGroup;


  constructor(
    private FormBuilder:FormBuilder,
    private service: CadastroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.inputsCadastro=this.FormBuilder.group({
      nome:[''],
      area:[''],
      cidade:[''],
      anoPlantio:[''],
      custos:[''],
      producao:['']
    })
  }


  enviar(){
    if(this.inputsCadastro.valid){
      const novoCampo = this.inputsCadastro.getRawValue() as Cadastro;
      this.service.cadastrarNewCard(novoCampo).subscribe(()=>{
        this.router.navigate(['/visualizar']);
      },
      (error)=>{
        console.log('Erro inesperado')
      }
    );
    }
  }

  vazio(){
    
  }

}
