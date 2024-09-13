import { Component } from '@angular/core';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  dadosBanco = new Array();

  constructor() { }

  ngOnInit() {
    this.dadosBanco = dataFake.filter(item => item.id >= '2');
  }

}
