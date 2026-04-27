import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  imports: [FormsModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {

clientes: string[] = ["João Silva", "Carlinho", "Ronaldinho"];
cpfs: string[] = ["123.456.391-10","999.999.999-10","696.6969.969-69"];

nome: string = "";
cpf: string = "";

indiceParaEditar: number = -1;

salvar():void{

  if(this.indiceParaEditar === -1){
    this.cadastrar();
  }else{
    this.editar();
  }
this.cpf = "";
this.nome = "";

}

cadastrar(): void {
  this.clientes.push(this.nome)
  this.cpfs.push(this.cpf)

  alert("Clientes cadastrado com sucesso");
}

editar():void {
  this.clientes[this.indiceParaEditar] = this.nome;
  this.cpfs[this.indiceParaEditar] = this.cpf;


  alert("Clientes atualizado com sucesso");
  this.indiceParaEditar = -1
}
apagar(nomeCliente: string):void{
  let indiceNomeCliente = this.clientes.indexOf(nomeCliente);

  this.clientes.splice(indiceNomeCliente,1)
  this.cpfs.splice(indiceNomeCliente,1)

}

preencherCampoParaEditar(nomeCliente: string, cpfCliente: string):void{

  this.indiceParaEditar = this.clientes.indexOf(nomeCliente)

  this.nome = nomeCliente;
  this.cpf = cpfCliente;
}
}
