import { Component } from '@angular/core';

import { Hero } from './../hero/hero.model';
import { HeroService } from './../hero/hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

// export a class like this or using model
/* export class Hero {
  id: number;
  name: string;
}
*/

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroComponent implements OnInit {
  ngOnInit(): void {
    this.getHeroes();
  }
  constructor(
    private router: Router,
    private heroService: HeroService) { }
  heroes: Hero[];
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
