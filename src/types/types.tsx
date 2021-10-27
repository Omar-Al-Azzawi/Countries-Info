export type Languages = {
    name: string;
  };
  
  export type Country = {
    flag: string;
    name: string;
    languages: Languages[];
    population: number;
    region: string;
  };

  export type Search = {
    type: string
  };