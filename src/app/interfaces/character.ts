export interface Character {
  results: Array<CharacterData>;
}

export interface CharacterData {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
  espisode: any;
}
