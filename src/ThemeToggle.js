import React from 'react';

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
            Basculer le mode sombre
        </button>
    );
};

export default ThemeToggle;
