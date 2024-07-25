import {
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
  MovieProps,
} from "./movies";

export const VideoCarousel = () => {
  return (
    <div className="bg-background">
      <div className="flex gap-5 mb-5 overflow-clip">
        <div className="shrink-0 w-[60vw] rounded-2xl overflow-clip">
          <img className="w-full h-full object-cover" src={movies[0].poster} alt={movies[0].name} />
        </div>
        <div  className="shrink-0 w-[60vw] rounded-2xl overflow-clip">
          <img className="w-full h-full object-cover" src={movies[1].poster} alt={movies[1].name} />
        </div>
        <div  className="shrink-0 w-[60vw] rounded-2xl overflow-clip">
          <img className="w-full h-full object-cover" src={movies[2].poster} alt={movies[2].name} />
        </div>
      </div>
      <SmallMovieCarousel movies={randomMoviesSet1} />
      <SmallMovieCarousel movies={randomMoviesSet2} />
    </div>
  );
};

const SmallMovieCarousel = ({ movies }: { movies: MovieProps[] }) => {
  return (
    <div className="flex gap-3 overflow-clip">
      {movies.map((movie, index) => (
        <div key={`${movie.name}-${index}`} className="w-[23vw] shrink-0">
          <img
          className="w-full h-full object-cover rounded-xl"
            src={movie.poster}
            alt={movie.name}
            key={`${movie.name}-${index}`}
          />
        </div>
      ))}
    </div>
  );
};
