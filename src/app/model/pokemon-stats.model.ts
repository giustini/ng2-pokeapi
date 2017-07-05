import { PokemonStat } from "./pokemon-stat.model";

export class PokemonStats {

  hp: PokemonStat;
  attack: PokemonStat;
  defense: PokemonStat;
  specialAttack: PokemonStat;
  specialDefense: PokemonStat;
  speed: PokemonStat;

  constructor(hp: PokemonStat, attack: PokemonStat, defense: PokemonStat, specialAttack: PokemonStat, specialDefense: PokemonStat, speed: PokemonStat) {
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.specialAttack = specialAttack;
    this.specialDefense = specialDefense;
    this.speed = speed;
  }
}
