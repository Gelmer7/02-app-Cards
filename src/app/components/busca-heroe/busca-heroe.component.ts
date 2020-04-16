import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { HeroesService } from '../../services/heroes.service'

@Component({
  selector: 'app-buscaheroe',
  templateUrl: './busca-heroe.component.html',
})
export class BuscaHeroeComponent implements OnInit {

  heroe:any = {}

  constructor (   private activatedRoute:ActivatedRoute, 
                  private _heroesService:HeroesService
    ) {
    this.activatedRoute.params.subscribe( params => {
      console.log("parametros: ", ['termiBusca'])
      this.heroe = this._heroesService.buscarHeroes(params['id'])
    })
   }

  ngOnInit(): void {
  }

}
