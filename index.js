const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const tutors = [
    {
        "Name": "Ana García",
        "Email": "ana.garcia@example.com",
        "Specialty": "Matemáticas",
        "Cost": 20,
        "Photo": "https://imgur.com/hTzg2aq"
    },
    {
        "Name": "Luis Fernández",
        "Email": "luis.fernandez@example.com",
        "Specialty": "Física",
        "Cost": 25,
        "Photo": "https://imgur.com/B8g83dV"
    },
    {
        "Name": "María López",
        "Email": "maria.lopez@example.com",
        "Specialty": "Química",
        "Cost": 22,
        "Photo": "https://imgur.com/5DlrWvb"
    },
    {
        "Name": "Carlos Martínez",
        "Email": "carlos.martinez@example.com",
        "Specialty": "Biología",
        "Cost": 24,
        "Photo": "https://imgur.com/JtZBY4N"
    },
    {
        "Name": "Lucía Gómez",
        "Email": "lucia.gomez@example.com",
        "Specialty": "Lengua y Literatura",
        "Cost": 18,
        "Photo": "https://imgur.com/GGCcqsQ"
    },
    {
        "Name": "Juan Pérez",
        "Email": "juan.perez@example.com",
        "Specialty": "Historia",
        "Cost": 20,
        "Photo": "https://imgur.com/9dIdJwV"
    },
    {
        "Name": "Elena Sánchez",
        "Email": "elena.sanchez@example.com",
        "Specialty": "Geografía",
        "Cost": 19,
        "Photo": "https://imgur.com/dZHuXj4"
    },
    {
        "Name": "Sofía Díaz",
        "Email": "sofia.diaz@example.com",
        "Specialty": "Inglés",
        "Cost": 23,
        "Photo": "https://imgur.com/nynphoZ"
    },
    {
        "Name": "Miguel Torres",
        "Email": "miguel.torres@example.com",
        "Specialty": "Francés",
        "Cost": 22,
        "Photo": ""
    },
    {
        "Name": "Laura Romero",
        "Email": "laura.romero@example.com",
        "Specialty": "Alemán",
        "Cost": 24,
        "Photo": "https://imgur.com/w6DQihe"
    },
    {
        "Name": "Pedro Ruiz",
        "Email": "pedro.ruiz@example.com",
        "Specialty": "Filosofía",
        "Cost": 21,
        "Photo": ""
    },
    {
        "Name": "Marina Morales",
        "Email": "marina.morales@example.com",
        "Specialty": "Economía",
        "Cost": 25,
        "Photo": "https://imgur.com/6A5wHXw"
    },
    {
        "Name": "Sergio Blanco",
        "Email": "sergio.blanco@example.com",
        "Specialty": "Derecho",
        "Cost": 26,
        "Photo": ""
    },
    {
        "Name": "Paula Herrera",
        "Email": "paula.herrera@example.com",
        "Specialty": "Psicología",
        "Cost": 23,
        "Photo": "https://imgur.com/lSa4hET"
    },
    {
        "Name": "Andrés Vega",
        "Email": "andres.vega@example.com",
        "Specialty": "Sociología",
        "Cost": 22,
        "Photo": "https://imgur.com/wtIDKN3"
    },
    {
        "Name": "Isabel Flores",
        "Email": "isabel.flores@example.com",
        "Specialty": "Arte",
        "Cost": 24,
        "Photo": "https://imgur.com/JUtybzT"
    },
    {
        "Name": "Rafael Mendoza",
        "Email": "rafael.mendoza@example.com",
        "Specialty": "Música",
        "Cost": 25,
        "Photo": "https://imgur.com/A1rBadX"
    },
    {
        "Name": "Cristina Navarro",
        "Email": "cristina.navarro@example.com",
        "Specialty": "Educación Física",
        "Cost": 20,
        "Photo": "https://imgur.com/tf0auPK"
    },
    {
        "Name": "Javier Castillo",
        "Email": "javier.castillo@example.com",
        "Specialty": "Informática",
        "Cost": 26,
        "Photo": "https://imgur.com/PqxHWgm"
    },
    {
        "Name": "Natalia Ortega",
        "Email": "natalia.ortega@example.com",
        "Specialty": "Ingeniería",
        "Cost": 27,
        "Photo": "https://imgur.com/lq5NY7t"
    },
    {
        "Name": "Alejandro Ríos",
        "Email": "alejandro.rios@example.com",
        "Specialty": "Arquitectura",
        "Cost": 28,
        "Photo": "https://imgur.com/lnRu1WB"
    },
];
// Ruta principal
app.get('/', (req, res) => {
    res.json(tutors);
});

// Ruta para obtener la lista de tutores
app.get('/api/tutors', (req, res) => {
    res.json(tutors);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
