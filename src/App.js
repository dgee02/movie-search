import { useState } from 'react';
import './App.css';
// import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// getting movie data from this site
const API_URL = 'https://www.omdbapi.com?apikey=9f09a07c';

// component
const App = () => {
	// states
	const [moviesList, setMoviesList] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	// search movie function; async means data takes some time to be fetched
	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`); // calls API
		const data = await response.json(); // retrieve data from API
		setMoviesList(data.Search); // put the data in moviesList state
	};

	// useEffect fetches data immediately after site loads
	// useEffect(() => {
	// 	searchMovies('Spiderman');
	// }, []); // [] only calls at start

	return (
		<div className="app">
			<h1>Movie Search</h1>

			<input
				placeholder="🔍 Search"
				value={searchTerm}
				onChange={(userInput) => {
					searchMovies(userInput.target.value);
					setSearchTerm(userInput.target.value);
				}}
			/>
			{/* <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} /> */}

			{searchTerm === '' ? (
				<div className="empty">
					<h2>Enter a movie title to search for</h2>
				</div>
			) : moviesList?.length > 0 ? (
				<div className="container">
					{moviesList.map((movie) => (
						<MovieCard movie={movie} />
					))}
				</div>
			) : (
				<div className="empty">
					<h2>No movie titles named "{searchTerm}" were found</h2>
				</div>
			)}
		</div>
	);
};

export default App;
