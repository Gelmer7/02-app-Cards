import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe:any = {}
  @Input() index:number

  @Output() heroeSeleccionado:EventEmitter<number>

  constructor( private route:Router) {
        this.heroeSeleccionado = new EventEmitter()
     }

  ngOnInit(): void {
  }
  verHeroe(){
    console.log("primero aqui... heroetarjeta!!!")
    this.heroeSeleccionado.emit(this.index)

    //this.route.navigate(['/heroe', this.index])
  }

}
