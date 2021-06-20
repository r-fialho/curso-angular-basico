import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  heroes = HEROES;

  constructor() { }

  getHeroes(): Hero[] {
    return this.heroes;
  }

}