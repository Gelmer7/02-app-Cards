import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/hero.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[] = [];

  constructor(private _heroesService: HeroesService, 
              private route:Router ) {

  }

  ngOnInit(): void {
    console.log('init..');
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes)
  }
  verHeroe(idx:number){
    this.route.navigate(['/heroe', idx])
  }
}
