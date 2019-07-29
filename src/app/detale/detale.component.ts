import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { Film } from '../modele/film';
import { FilmyService } from '../filmy.service';


@Component({
  selector: 'app-detale',
  templateUrl: './detale.component.html',
  styleUrls: ['./detale.component.css']
})
export class DetaleComponent implements OnInit {

film:Film;

  constructor( 
    private route: ActivatedRoute,
    private fS: FilmyService,
    private location: Location){}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.film = this.fS.getFilm(Number(id));
  }
  cofnij(){
    this.location.back();
  }
}
