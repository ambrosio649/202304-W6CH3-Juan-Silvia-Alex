export type Character = {
  id: number;
  tvShow: string;
  name: string;
  family: string;
  age: number;
  emoji: string;
  alive: boolean;
  communicate: string;
};

export type King = Character & {
  rulingYears: number;
};

export type Knight = Character & {
  weapon: string;
  skills: number;
};

export type Counselor = Character & {
  characterAdvised: King | Knight;
};

export type Squire = Character & {
  knight: Knight;
  pelotismo: number;
};
