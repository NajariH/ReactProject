/*import React from 'react';
import cinema from '../../images/cinema.png';//movie-catalog\src\images\cinema.png


const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
             style={{ 
                backgroundImage: `url(${cinema})`, // Définir l'image de fond
                backgroundSize: 'cover', // Pour couvrir toute la zone
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat', // Pour ne pas répéter l'image
                objectFit: 'cover', // Pour adapter l'image à la taille de l'écran
                minHeight: '100vh', // Pour que la page occupe toute la hauteur de l'écran

            }}
           >
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

export default Home;*/

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import cinema from '../../images/cinema.png'; // Chemin vers l'image

const Home = () => {
    useEffect(() => {
        // Animation du titre
        gsap.fromTo(".title",
            { y: -50, opacity: 0 }, 
            { y: 10, opacity: 1, duration: 10 }
        );

        // Animation des icônes de médias sociaux
        gsap.fromTo(".social-icon", 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
        );
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
             style={{ 
                backgroundImage: `url(${cinema})`, // Définir l'image de fond
                backgroundSize: 'cover', // Pour couvrir toute la zone
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat', // Pour ne pas répéter l'image
                objectFit: 'cover', // Pour adapter l'image à la taille de l'écran
                minHeight: '100vh', // Pour que la page occupe toute la hauteur de l'écran
            }}
           >
            <h1 className="title text-4xl font-bold mb-4 text-white">Bienvenue dans votre catalogue de films préférés</h1>
            <p className="text-lg mb-8 text-center text-white">
                Explorez, recherchez et découvrez vos films préférés avec notre application.
            </p>
            <a href="/movies" className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-200">
                Commencer la recherche
            </a>
            <a href="/contact" className="mt-4 text-blue-500 underline">
                Contactez nous
            </a>

            {/* Icônes de médias sociaux */}
            <div className="flex flex-col items-center mt-8">
                <a href="https://facebook.com" className="social-icon mb-2 text-white">
                    <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="https://twitter.com" className="social-icon mb-2 text-white">
                    <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="https://instagram.com" className="social-icon mb-2 text-white">
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a href="https://youtube.com" className="social-icon mb-2 text-white">
                    <i className="fab fa-youtube fa-2x"></i>
                </a>
            </div>
        </div>
    );
};

export default Home;


