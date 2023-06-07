export interface Character {
  id: number;
  tvShow: string;
  name: string;
  family: string;
  age: number;
  emoji: string;
  alive: boolean;
  communicate: string;
}

export interface King extends Character {
  rulingYears: number;
}

export interface Knight extends Character {
  weapon: string;
  skills: number;
}

export interface Counselor extends Character {
  characterAdvised: King | Knight;
}

export interface Squire extends Character {
  knight: Knight;
  pelotismo: number;
}
