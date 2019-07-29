import { Injectable } from '@angular/core';
import {Film} from './modele/film';

@Injectable({
  providedIn: 'root'
})
export class FilmyService {

  private filmy: Film[] = [
    {id: 0, 
      tytul: 'Matrix',
      rokProdukcji: 1994,
      kategoria: 'SciFi',
      rezyser: 'Lana i Lilly Wachowski'  },

    {id: 1, 
      tytul: 'Krollew',
      rokProdukcji: 2019,
      kategoria: 'Familijny',
      rezyser: 'Rob Minkoff'   },

    {id: 2, 
      tytul: 'Shrek',
      rokProdukcji: 2001,
      kategoria: 'Przygodowy',
      rezyser: 'Andrew Adamson' }

  ];
wszystkieFilmy(): Film[]{
  return this.filmy;
} 
getFilm(id:number): Film{
  return this.filmy[id];
}
  constructor() { }
}
