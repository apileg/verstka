export interface PeopleResponse {
  results: Person[],
}

export interface Person {
  name: string,
  height: number,
  mass: number,

  //TODO: declare these as union types
  hair_color: string,
  skin_color: string,
  eye_color: string,
  gender: string,
  birth_year: string,


  homeworld: string,
}
