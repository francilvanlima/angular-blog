import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input() //Significa que essa propriedade ela é imputável
  photoCover: string = "";
  @Input() //Significa que essa propriedade ela é imputável
  cardTitle: string = "";
  @Input() //Significa que essa propriedade ela é imputável
  cardDescription: string = "";
  @Input() //Significa que essa propriedade ela é imputável
  Id: string = "0";

  constructor() {

  }

}
