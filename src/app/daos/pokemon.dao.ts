import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { BaseDAO } from "./base.dao";
import { Pokemon } from "../model/pokemon/pokemon.model";
import { PokemonStats } from "../model/pokemon/pokemon-stats.model";
import { PokemonStat } from "../model/pokemon/pokemon-stat.model";
import { PokemonSprites } from "../model/pokemon/pokemon-sprites.model";
import { PokemonTypes } from "../model/pokemon/pokemon-types.model";

@Injectable()
export class PokemonDAO extends BaseDAO {

  constructor(injectedHttp:Http) {
    super(injectedHttp, "pokemon");
  }

  public getPokemonById(id:number):Observable<Pokemon> {
    return this.getPokemon(id);
  }

  public getPokemonByName(name:string):Observable<Pokemon> {
    return this.getPokemon(name);
  }

  private getPokemon(idOrName):Observable<Pokemon> {
    return this.get(idOrName).map(response => response.json()).map(
      data => new Pokemon(
        data.id,
        data.name,
        data.base_experience,
        data.height,
        data.is_default,
        data.order,
        data.weight,
        this.buildTypes(data.types),
        this.buildSprites(data.sprites),
        this.buildStats(data.stats)
      ));
  }

  private buildTypes(rawTypes:any[]):PokemonTypes {
    return new PokemonTypes(
      rawTypes.find(type => type.slot === 1)["type"]["name"],
      rawTypes.find(type => type.slot === 2)["type"]["name"]
    );
  }

  private buildStats(rawStats:any[]):PokemonStats {
    return new PokemonStats(
      new PokemonStat(
        rawStats.find(stat => stat.stat.name === "hp")["base_stat"],
        rawStats.find(stat => stat.stat.name === "hp")["effort"]
      ),
      new PokemonStat(
        rawStats.find(stat => stat.stat.name === "attack")["base_stat"],
        rawStats.find(stat => stat.stat.name === "attack")["effort"]
      ),
      new PokemonStat(
        rawStats.find(stat => stat.stat.name === "defense")["base_stat"],
        rawStats.find(stat => stat.stat.name === "defense")["effort"]
      ),
      new PokemonStat(
        rawStats.find(stat => stat.stat.name === "special-attack")["base_stat"],
        rawStats.find(stat => stat.stat.name === "special-attack")["effort"]
      ),
      new PokemonStat(
        rawStats.find(stat => stat.stat.name === "special-defense")["base_stat"],
        rawStats.find(stat => stat.stat.name === "special-defense")["effort"]
      ),
      new PokemonStat(
        rawStats.find(stat => stat.stat.name === "speed")["base_stat"],
        rawStats.find(stat => stat.stat.name === "speed")["effort"]
      )
    );
  }

  private buildSprites(rawSprites:any):PokemonSprites {
    return new PokemonSprites(
      rawSprites.front_default,
      rawSprites.back_default,
      rawSprites.front_female,
      rawSprites.back_female,
      rawSprites.front_shiny,
      rawSprites.back_shiny,
      rawSprites.front_shiny_female,
      rawSprites.back_shiny_female
    );
  }
}
