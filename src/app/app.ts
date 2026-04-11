import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { PacienteComponent } from './paciente/paciente';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,PacienteComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('loja-ng');

  numero1 : number = 0;
  numero2 : number = 0;

  somar() : void {
    let resultado: number = this.numero1 + this.numero2
    alert(resultado)

  }
  subtrair() : void {
      let resultado: number = this.numero1 - this.numero2
      alert(resultado)
    
  }
  multiplicar():  void {
    let resultado: number = this.numero1 * this.numero2
    alert(resultado)
  }
  dividir(): void {
    let resultado: number = this.numero1 / this.numero2
    alert(resultado)

  }

}
