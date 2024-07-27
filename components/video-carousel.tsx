"use client";
import { useWindowSize } from "react-use";
import { useScroll, useTransform, motion } from "framer-motion";
import {
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
  MovieProps,
} from "./movies";
import { useMemo, useRef } from "react";

export const VideoCarousel = () => {
  const { width, height } = useWindowSize();
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });
  const maxScale = useMemo(() => {
    const windowYratio = height / width;
    const xScale = 1.667;
    const yScale = xScale * (16 / 9) * windowYratio;
    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maxScale * 1.1, maxScale, 1]
  );

  const opacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  const translatexleft = useTransform(scrollYProgress,[0.64,0.66],[-20,0]);
  const translatexright = useTransform(scrollYProgress,[0.64,0.66],[20,0]);

  return (
    <div className="bg-background pb-8">
      <div
        ref={carouselWrapperRef}
        className="mt-[-100vh] overflow-clip h-[300vh]"
      >
        <div className="h-screen sticky top-0 flex items-center">
          <div className="relative flex gap-5 mb-5 left-1/2 -translate-x-1/2">
            <motion.div
              style={{ opacity,x:translatexleft }}
              className="shrink-0 w-[60vw] aspect-video rounded-2xl overflow-clip"
            >
              <img
                className="w-full h-full object-cover"
                src={movies[0].poster}
                alt={movies[0].name}
              />
            </motion.div>
            <motion.div
              style={{ scale }}
              className="shrink-0 w-[60vw] aspect-video rounded-2xl overflow-clip"
            >
              <img
                className="w-full h-full object-cover"
                src={movies[3].poster}
                alt={movies[3].name}
              />
            </motion.div>
            <motion.div
              style={{ opacity,x:translatexright }}
              className="shrink-0 w-[60vw] aspect-video rounded-2xl overflow-clip"
            >
              <img
                className="w-full h-full object-cover"
                src={movies[2].poster}
                alt={movies[2].name}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="space-y-3 -mt-[138px]">
        <SmallMovieCarousel movies={randomMoviesSet1} />
        <div className="[--duration:68s] [--carousel-left:-30px]">
          <SmallMovieCarousel movies={randomMoviesSet2} />
        </div>
      </div>
    </div>
  );
};

const SmallMovieCarousel = ({ movies }: { movies: MovieProps[] }) => {
  return (
    <div className="overflow-clip">
      <div className="flex gap-3 animate-carousel-move relative left-[var(--carousel-left,0px)]">
        {movies.map((movie, index) => (
          <div
            key={`${movie.name}-${index}`}
            className="w-[23vw] aspect-video shrink-0"
          >
            <img
              className="w-full h-full object-cover rounded-xl"
              src={movie.poster}
              alt={movie.name}
              key={`${movie.name}-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
