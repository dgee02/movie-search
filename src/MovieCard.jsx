// code for movie card component
import React from 'react';

const IMDB_URL = 'https://www.imdb.com/title/';

const MovieCard = ({ movie }) => {
	return (
		<div className="movie">
			<a href={IMDB_URL + movie.imdbID}>
				<div>
					<p>{movie.Year}</p>
				</div>
				<div>
					<img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
				</div>

				<div>
					<span>
						{movie.Type} (ID: {movie.imdbID})
					</span>
					<h3>{movie.Title}</h3>
				</div>
			</a>
		</div>
	);
};

export default MovieCard;
