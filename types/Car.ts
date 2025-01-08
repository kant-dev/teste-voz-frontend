export interface Car {
  id: string,
  model: string;
  year: number;
  maxSpeed: string;
  performance: {
    powerRating: number;
    comfortRating: number;
  };
  image: string;
};
