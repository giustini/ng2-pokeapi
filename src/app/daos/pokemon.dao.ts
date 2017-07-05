import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { BaseDAO } from "./base.dao";
import { Pokemon } from "../model/pokemon.model";

@Injectable()
export class PokemonDAO extends BaseDAO {

  constructor(injectedHttp:Http) {
    super(injectedHttp, "pokemon");
  }

  public getPokemonById(id:number):Observable<Pokemon> {
    return this.get(id).map(response => response.json()).map(
      data => new Pokemon(
        data.id,
        data.name,
        data.base_experience,
        data.height,
        data.is_default,
        data.order,
        data.weight
      ));
  }
}
