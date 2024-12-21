import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ThemeToggle = () => {
    const toggleTheme = () => {
        const htmlElement = document.documentElement;
        htmlElement.classList.toggle('dark');
        // Enregistrez la préférence dans localStorage
        if (htmlElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    };

    // Vérifiez la préférence de thème lors du chargement
    React.useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        }
    }, []);

    return (
        <button 
            onClick={toggleTheme} 
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
        >
                        {document.documentElement.classList.contains('dark') ? (
                <i className="fas fa-moon text-white-500 mr-2"></i> // Icône du soleil pour le mode sombre
            ) : (
                <i className="fas fa-sun-bright text-white-800 mr-2"></i> // Icône de la lune pour le mode clair<i class="fa-duotone fa-regular fa-sun-bright"></i>
            )}
            Basculer le mode sombre
        </button>
    );
};

export default ThemeToggle;
 
