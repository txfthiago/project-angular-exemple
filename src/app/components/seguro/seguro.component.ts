import { Component } from '@angular/core';
import { SecurityInfoCardComponent } from "../security-info-card/security-info-card.component";

@Component({
  selector: 'app-seguro',
  standalone: true,
  imports: [SecurityInfoCardComponent],
  templateUrl: './seguro.component.html',
  styleUrl: './seguro.component.css'
})
export class SeguroComponent {

}
