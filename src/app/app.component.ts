import { Component, OnInit } from '@angular/core';
import { PokemonService } from "./services/pokemon.service";
import { Pokemon } from "./model/pokemon.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ PokemonService ]
})
export class AppComponent implements OnInit {

  title = 'pokéapi Angular client';

  pokemon:Pokemon;

  constructor(private pokemonService:PokemonService) {

  }

  ngOnInit(): void {
    this.pokemonService.getPokemonById(1)
      .subscribe(
        (pokemon => {
          this.pokemon = pokemon
        }),
        (error) => console.log(error),
        (() => console.log('Request completed!'))
      );
  }

}
