import { Injectable } from "@angular/core";
import { PokemonDAO } from "../daos/pokemon.dao";
import { Pokemon } from "../model/pokemon/pokemon.model";
import { Observable } from "rxjs";

@Injectable()
export class PokemonService {

  constructor(private pokemonDAO:PokemonDAO) {
  }

  getPokemonById(id:number):Observable<Pokemon> {
    return this.pokemonDAO.getPokemonById(id);
  }
}
