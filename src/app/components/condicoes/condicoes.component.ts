import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-condicoes',
  standalone: true,
  imports: [],
  templateUrl: './condicoes.component.html',
  styleUrl: './condicoes.component.css',
})
export class CondicoesComponent {
  @Input() prazo!: string;
  @Input() firstParcel!: string;
  @Input() troco!: number;
  @Input() months!: Array<String>;
}
