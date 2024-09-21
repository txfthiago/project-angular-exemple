import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { CondicoesComponent } from './components/condicoes/condicoes.component';
import { SeguroComponent } from './components/seguro/seguro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ClienteComponent,
    CondicoesComponent,
    SeguroComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'projetotest';
  prazo = '24 meses';
  firstParcel = '20/08/2022';
  troco = 100000;
  months = ['Jan', 'Feb', 'Mar'];

  clientName = 'Hilda Aparecida da Silva Oliveira';
  cpf = '094.957.032-04';
  agencia = 3123;
  conta = '123456-7';
}
