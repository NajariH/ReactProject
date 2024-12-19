/*import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Bienvenue dans votre catalogue de films préférés</h1>
            <p>Explorez, recherchez et découvrez vos films préférés !</p>
            <Link to="/movies">Voir les films</Link>
        </div>
    );
};

export default Home;*/
// Home.js
import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <h1 className="text-4xl font-bold mb-4">Bienvenue dans votre catalogue de films préférés</h1>
            <p className="text-lg mb-8 text-center">
                Explorez, recherchez et découvrez vos films préférés avec notre application.
            </p>
            <a href="/movies" className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-200">
                Commencer la recherche
            </a>
            <a href="/contact" className="mt-4 text-blue-500 underline">
                Contactez nous
            </a>

        </div>
    );
};

export default Home;

