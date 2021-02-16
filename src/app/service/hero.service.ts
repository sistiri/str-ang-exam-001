import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes: Hero[] = [
    {
      id: 1,
      name: 'Water Lilly',
      superpower: 'fluid',
      address: 'Balaton',
    },
    {
      id: 2,
      name: 'Fire Fairy',
      superpower: 'heated',
      address: 'Etna',
    },
    {
      id: 3,
      name: 'Money Molly',
      superpower: 'rich',
      address: 'Monaco',
    },
    {
      id: 4,
      name: 'Flying Fiona',
      superpower: 'volant',
      address: 'Clouds',
    },
    {
      id: 5,
      name: 'Smart Sandy',
      superpower: 'tricky',
      address: 'Capital',
    },
  ]

  constructor() { }

  getAll(): Hero[] {
    return this.heroes
  }
}
