export class PokemonSprites {

  frontDefault:string;
  backDefault:string;
  frontFemale:string;
  backFemale:string;
  frontShiny:string;
  backShiny:string;
  frontShinyFemale:string;
  backShinyFemale:string;

  constructor(frontDefault: string, backDefault: string, frontFemale: string, backFemale: string, frontShiny: string, backShiny: string, frontShinyFemale: string, backShinyFemale: string) {
    this.frontDefault = frontDefault;
    this.backDefault = backDefault;
    this.frontFemale = frontFemale;
    this.backFemale = backFemale;
    this.frontShiny = frontShiny;
    this.backShiny = backShiny;
    this.frontShinyFemale = frontShinyFemale;
    this.backShinyFemale = backShinyFemale;
  }
}
