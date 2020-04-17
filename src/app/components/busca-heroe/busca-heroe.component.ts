import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { HeroesService } from '../../services/heroes.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-buscaheroe',
  templateUrl: './busca-heroe.component.html',
})
export class BuscaHeroeComponent implements OnInit {

  heroes:any = []
  resultado:boolean = false
  paramBusca:string = ''
  
  constructor (   private activatedRoute:ActivatedRoute, 
                  private _heroesService:HeroesService,
                  private route:Router) {
   }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroes(params['termiBusca'])    
      let tam = this.heroes.length
      this.paramBusca = params['termiBusca']
        if (tam >= 1) {
          this.resultado = true
        }else {
          this.resultado = false
        }
    })
  }
  verHeroeBusca(idx:number){
    this.route.navigate(['/heroe', idx])
  }

}
