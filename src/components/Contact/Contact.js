/*
import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
            <p className="text-lg mb-8 text-center">
                Pour toute question ou suggestion, veuillez nous contacter à l'adresse email suivante :
                <br />
                <a href="mailto:contact@movies.com" className="text-blue-500 underline">contact@3w.com</a>
            </p>
        </div>
    );
};

export default Contact;*/
// Contact.js
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validation simple
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
            setError('Tous les champs sont obligatoires.');
            return;
        }

        // Ici, vous pouvez ajouter la logique pour envoyer les données à votre serveur ou API
        console.log(formData);

        // Réinitialiser le formulaire après la soumission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        });
        
        setSuccessMessage('Votre message a été envoyé avec succès !');
        setError('');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4">
            <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-sm font-medium">Prénom:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="border rounded p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-sm font-medium">Nom:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="border rounded p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='exemple@example.com'
                        required
                        className="border rounded p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="border rounded p-2 w-full"
                    />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {successMessage && <p className="text-green-500">{successMessage}</p>}
                <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-200">Envoyer</button>
            </form>
        </div>
    );
};

export default Contact;

