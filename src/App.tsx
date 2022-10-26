import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import { NewMovie } from './components/NewMovie';
import moviesFromServer from './api/movies.json';
import { Movie } from './types/Movie';
import './App.scss';

export const App = () => {
  const [movies, setMovies] = useState<Movie[]>(moviesFromServer);

  const addMovie = (film: Movie) => {
    setMovies(films => [...films, film]);
  };

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList
          movies={movies}
        />
      </div>

      <div className="sidebar">
        <NewMovie
          onAdd={addMovie}
        />
      </div>
    </div>
  );
};