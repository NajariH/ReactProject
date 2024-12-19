import React, { useState } from 'react';
import axios from 'axios';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState(''); // Mot-clé pour le titre
    const [year, setYear] = useState(''); // Année
    const [type, setType] = useState(''); // Type: film ou série
    const [error, setError] = useState('');

    const searchMovies = async (e) => {
        e.preventDefault();
        if (!query) {
            setError('Veuillez entrer un mot-clé pour le titre.');
            return;
        }

        try {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=8344254b&s=${query}`);
            if (response.data.Response === "True") {
                const filteredMovies = response.data.Search.filter(movie => {
                    const isYearMatch = year ? movie.Year === year : true;
                    const isTypeMatch = type ? movie.Type === type : true;
                    return isYearMatch && isTypeMatch;
                });
                setMovies(filteredMovies);
                setError('');
            } else {
                setMovies([]);
                setError(response.data.Error);
            }
        } catch (error) {
            console.error("Erreur lors de la recherche des films :", error);
            //setError('Erreur lors de la recherche des films.');
        }
    };

    const resetFields = () => {
        setQuery('');
        setYear('');
        setType('');
        setMovies([]);
        setError('');
    };

    return (
        <div className="movies p-4">
            <form onSubmit={searchMovies} className="mb-4">
                <input 
                    type="text" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    placeholder="Rechercher un film par titre"
                    className="border rounded p-2 mr-2 text-gray-900 dark:text-gray-900" // Ajuster la couleur du texte
                />
                <input 
                    type="text" 
                    value={year} 
                    onChange={(e) => setYear(e.target.value)} 
                    placeholder="Année (ex: 2024)"
                    className="border rounded p-2 mr-2 text-gray-900 dark:text-gray-900" // Ajuster la couleur du texte
                />
                <select value={type} onChange={(e) => setType(e.target.value)} className="border rounded p-2 mr-2 text-gray-900 dark:text-gray-900">
                    <option value="">Sélectionner le type</option>
                    <option value="movie">Film</option>
                    <option value="series">Série</option>
                </select>
                <button type="submit" className="bg-blue-500 text-white rounded p-2">Rechercher</button>
                <button type="button" onClick={resetFields} className="bg-red-500 text-white rounded p-2 ml-2">Réinitialiser</button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
            {movies.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {movies.map(movie => (
                        <div key={movie.imdbID} className="movie-card border rounded p-4 shadow-lg bg-white dark:bg-gray-800">
                            <img src={movie.Poster} alt={movie.Title} className="w-full h-auto mb-4" />
                            <h3 className="font-bold">{movie.Title}</h3>
                            <p><strong>Année :</strong> {movie.Year}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Aucun film trouvé.</p>
            )}
        </div>
    );
};

export default Movies;
