import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
})
export class ClienteComponent {
  @Input() clientName!: string;
  @Input() cpf!: string;
  @Input() agencia!: number;
  @Input() conta!: string;
}
