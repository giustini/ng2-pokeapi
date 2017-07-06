import { Component, OnInit } from '@angular/core';
import { PokemonService } from "./services/pokemon.service";
import { Pokemon } from "./model/pokemon/pokemon.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ PokemonService ]
})
export class AppComponent implements OnInit {

  pokemon1:Pokemon;
  pokemon2:Pokemon;

  constructor(private pokemonService:PokemonService) {

  }

  ngOnInit(): void {
    this.pokemonService.getPokemonById(1)
      .subscribe(
        (pokemon => {
          this.pokemon1 = pokemon
        }),
        (error) => console.log(error),
        (() => console.log('Request completed!'))
      );

    this.pokemonService.getPokemonByName("mew")
      .subscribe(
        (pokemon => {
          this.pokemon2 = pokemon
        }),
        (error) => console.log(error),
        (() => console.log('Request completed!'))
      );
  }

}
