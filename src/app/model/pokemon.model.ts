export class Pokemon {

  id:number;
  name:string;
  baseExperience:number;
  height:number;
  isDefault:boolean;
  order:number;
  weight:number;

  constructor(id: number, name: string, baseExperience: number, height: number, isDefault: boolean, order: number, weight: number) {
    this.id = id;
    this.name = name;
    this.baseExperience = baseExperience;
    this.height = height;
    this.isDefault = isDefault;
    this.order = order;
    this.weight = weight;
  }
}
