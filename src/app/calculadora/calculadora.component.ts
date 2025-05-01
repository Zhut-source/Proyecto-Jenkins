import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  display = '';
  botones: string[] = ['7', '8', '9', '/', 
                       '4', '5', '6', '*', 
                       '1', '2', '3', '-', 
                       '0', '.', '=', '+', 
                       'C'];

  presionar(valor: string) {
    if (valor === 'C') {
      this.display = '';
    } else if (valor === '=') {
      try {
        this.display = eval(this.display);
      } catch (e) {
        this.display = 'Error';
      }
    } else {
      this.display += valor;
    }
  }
}
