import { PokemonSprites } from "./pokemon-sprites.model";
import { PokemonStats } from "./pokemon-stats.model";
import { PokemonTypes } from "./pokemon-types.model";

export class Pokemon {

  id:number;
  name:string;
  baseExperience:number;
  height:number;
  isDefault:boolean;
  order:number;
  weight:number;
  types:PokemonTypes;
  sprites:PokemonSprites;
  stats:PokemonStats;

  constructor(id: number, name: string, baseExperience: number, height: number, isDefault: boolean, order: number, weight: number, types:PokemonTypes, sprites: PokemonSprites, stats:PokemonStats) {
    this.id = id;
    this.name = name;
    this.baseExperience = baseExperience;
    this.height = height;
    this.isDefault = isDefault;
    this.order = order;
    this.weight = weight;
    this.types = types;
    this.sprites = sprites;
    this.stats = stats;
  }
}
