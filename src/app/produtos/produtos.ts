import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {

  produtos: string[] = ['Gabinete', 'Memoria Ram', 'Processador'];
  estoque: string[] = ["5", "6", "5"];

  nome: string = "";
  quantidade: string = "";

  indiceParaEditar: number = -1;

  salvar(): void {

    if (this.nome.trim() === "") {
      alert('Digite o nome do produto');
      return;
    }

    if (this.quantidade === "") {
      alert('Digite uma quantidade válida');
      return;
    }

    if (this.indiceParaEditar === -1) {
      this.cadastrar();
    } else {
      this.editar();
    }

    this.nome = '';
    this.quantidade = "";
  }

  cadastrar(): void {

    this.produtos.push(this.nome);
    this.estoque.push(this.quantidade);

    alert('Produto cadastrado com sucesso');
  }

  editar(): void {

    this.produtos[this.indiceParaEditar] = this.nome;
    this.estoque[this.indiceParaEditar] = this.quantidade;

    this.indiceParaEditar = -1;

    alert('Produto editado com sucesso');
  }

  apagar(nomeProduto: string): void {

    let indiceProduto = this.produtos.indexOf(nomeProduto);

    this.produtos.splice(indiceProduto, 1);
    this.estoque.splice(indiceProduto, 1);
  }

  preencherCampoParaEditar(nomeProduto: string, quantidadeProduto: string): void {

    this.indiceParaEditar = this.produtos.indexOf(nomeProduto);

    this.nome = nomeProduto;
    this.quantidade = quantidadeProduto;
  }
}