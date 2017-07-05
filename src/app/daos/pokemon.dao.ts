import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { BaseDAO } from "./base.dao";
import { Pokemon } from "../model/pokemon.model";
import { PokemonStats } from "../model/pokemon-stats.model";
import { PokemonStat } from "../model/pokemon-stat.model";
import { PokemonSprites } from "../model/pokemon-sprites.model";

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
        data.weight,
        this.buildSprites(data.sprites),
        this.buildStats(data.stats)
      ));
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
