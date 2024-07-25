export interface MovieProps {
  poster: string;
  name: string;
}

export const movies = [
  { poster: "/posters/inception.jpg", name: "Inception" },
  { poster: "/posters/olivia.jpg", name: "Olivia" },
  { poster: "/posters/TheBatman.jpg", name: "TheBatman" },
  { poster: "/posters/oppenheimer.jpeg", name: "Oppenheimer" },
  { poster: "/posters/peaky.jpg", name: "Peaky Blinders" },
];

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet3 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));
