import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {

  protected readonly title = signal('loja-ng');

  numero1: number = 0;
  numero2: number = 0;

  somar(): void {
    let resultado = this.numero1 + this.numero2;
    alert(resultado);
  }

  subtrair(): void {
    let resultado = this.numero1 - this.numero2;
    alert(resultado);
  }

  multiplicar(): void {
    let resultado = this.numero1 * this.numero2;
    alert(resultado);
  }

  dividir(): void {
    if (this.numero2 === 0) {
      alert('Não é possível dividir por zero');
    } else {
      let resultado = this.numero1 / this.numero2;
      alert(resultado);
    }
  }
  
}