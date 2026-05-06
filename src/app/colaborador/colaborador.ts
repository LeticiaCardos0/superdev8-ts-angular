import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-colaborador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './colaborador.html',
  styleUrl: './colaborador.css',
})
export class Colaborador {

  colaboradores: any[] = [];

  nome: string = "";
  dataNascimento: string = "";
  valorHora: number = 0;
  quantidadeHoras: number = 0;
  valorValeRefeicao: number = 0;
  valorValeTransporte: number = 0;
  planoSaude: number = 0;

  idade: number = 0;
  salarioBruto: number = 0;
  valorIR: number = 0;
  valorINSS: number = 0;
  salarioLiquido: number = 0;

  indiceParaEditar: number = -1;

  salvar(): void {

    if (this.nome.trim() === "") {
      alert('Digite o nome do colaborador');
      return;
    }

    if (this.dataNascimento.trim() === "") {
      alert('Digite a data de nascimento');
      return;
    }

    if (this.valorHora <= 0) {
      alert('Digite um valor hora válido');
      return;
    }

    if (this.quantidadeHoras <= 0) {
      alert('Digite uma quantidade de horas válida');
      return;
    }

    if (this.valorValeRefeicao < 0) {
      alert('Digite um valor válido para vale refeição');
      return;
    }

    if (this.valorValeTransporte < 0) {
      alert('Digite um valor válido para vale transporte');
      return;
    }

    this.calcularDados();

    if (this.indiceParaEditar === -1) {
      this.cadastrar();
    } else {
      this.editar();
    }

    this.limparCampos();
  }

  cadastrar(): void {

    const novoColaborador = {
      nome: this.nome,
      dataNascimento: this.dataNascimento,
      valorHora: this.valorHora,
      quantidadeHoras: this.quantidadeHoras,
      valorValeRefeicao: this.valorValeRefeicao,
      valorValeTransporte: this.valorValeTransporte,
      planoSaude: this.planoSaude,
      idade: this.idade,
      salarioBruto: this.salarioBruto,
      valorIR: this.valorIR,
      valorINSS: this.valorINSS,
      salarioLiquido: this.salarioLiquido,
    };

    this.colaboradores.push(novoColaborador);

    alert('Colaborador cadastrado com sucesso');
  }

  editar(): void {

    if (this.indiceParaEditar !== -1) {

      this.colaboradores[this.indiceParaEditar] = {
        nome: this.nome,
        dataNascimento: this.dataNascimento,
        valorHora: this.valorHora,
        quantidadeHoras: this.quantidadeHoras,
        valorValeRefeicao: this.valorValeRefeicao,
        valorValeTransporte: this.valorValeTransporte,
        planoSaude: this.planoSaude,
        idade: this.idade,
        salarioBruto: this.salarioBruto,
        valorIR: this.valorIR,
        valorINSS: this.valorINSS,
        salarioLiquido: this.salarioLiquido,
      };

      this.indiceParaEditar = -1;

      alert('Colaborador editado com sucesso');
    }
  }

  apagar(index: number): void {

    this.colaboradores.splice(index, 1);

    alert('Colaborador apagado com sucesso');
  }

  preencherCampoParaEditar(colaborador: any, index: number): void {

    this.indiceParaEditar = index;

    this.nome = colaborador.nome;
    this.dataNascimento = colaborador.dataNascimento;
    this.valorHora = colaborador.valorHora;
    this.quantidadeHoras = colaborador.quantidadeHoras;
    this.valorValeRefeicao = colaborador.valorValeRefeicao;
    this.valorValeTransporte = colaborador.valorValeTransporte;
    this.planoSaude = colaborador.planoSaude;

    this.calcularDados();
  }

  limparCampos(): void {

    this.nome = '';
    this.dataNascimento = '';
    this.valorHora = 0;
    this.quantidadeHoras = 0;
    this.valorValeRefeicao = 0;
    this.valorValeTransporte = 0;
    this.planoSaude = 0;
    this.idade = 0;
    this.salarioBruto = 0;
    this.valorIR = 0;
    this.valorINSS = 0;
    this.salarioLiquido = 0;
    this.indiceParaEditar = -1;
  }

  calcularDados(): void {

    if (this.dataNascimento) {

      const hoje = new Date();
      const dataNasc = new Date(this.dataNascimento);

      let idade = hoje.getFullYear() - dataNasc.getFullYear();

      const mes = hoje.getMonth() - dataNasc.getMonth();

      if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
        idade--;
      }

      this.idade = idade;
    }

    this.salarioBruto = this.valorHora * this.quantidadeHoras;

    const aliquotaINSS = 0.11;
    const tetoINSS = 7000;

    this.valorINSS = Math.min(
      this.salarioBruto * aliquotaINSS,
      tetoINSS * aliquotaINSS
    );

    let baseCalculoIR = this.salarioBruto - this.valorINSS;

    this.valorIR = 0;

    if (baseCalculoIR <= 2112) {

      this.valorIR = 0;

    } else if (baseCalculoIR <= 2826.65) {

      this.valorIR = (baseCalculoIR * 0.075) - 158.40;

    } else if (baseCalculoIR <= 3751.05) {

      this.valorIR = (baseCalculoIR * 0.15) - 370.40;

    } else if (baseCalculoIR <= 4664.68) {

      this.valorIR = (baseCalculoIR * 0.225) - 651.73;

    } else {

      this.valorIR = (baseCalculoIR * 0.275) - 884.96;
    }

    this.valorIR = Math.max(0, this.valorIR);

    this.salarioLiquido =
      this.salarioBruto -
      this.valorINSS -
      this.valorIR -
      this.valorValeRefeicao -
      this.valorValeTransporte -
      this.planoSaude;
  }
}