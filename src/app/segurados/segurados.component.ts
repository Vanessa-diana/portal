import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segurados',
  templateUrl: './segurados.component.html',
  styleUrls: ['./segurados.component.scss']
})
export class SeguradosComponent implements OnInit {

  link: string;
  seguros : string[]=['automovel', 'vida', 'saúde'];
  
  btnCadastrar(){

    alert("Cadastrado com sucesso")
  }

  constructor() { 
    this.link ='http://www.uol.com.br'

  }

  ngOnInit() {
  }

}
