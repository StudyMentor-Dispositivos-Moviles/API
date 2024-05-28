const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const tutors = [
    {
        "Name": "Ana García",
        "Email": "ana.garcia@example.com",
        "Specialty": "Matemáticas",
        "Cost": 20,
        "Photo": "https://example.com/photos/ana_garcia.jpg"
    },
    {
        "Name": "Luis Fernández",
        "Email": "luis.fernandez@example.com",
        "Specialty": "Física",
        "Cost": 25,
        "Photo": "https://example.com/photos/luis_fernandez.jpg"
    },
    {
        "Name": "María López",
        "Email": "maria.lopez@example.com",
        "Specialty": "Química",
        "Cost": 22,
        "Photo": "https://example.com/photos/maria_lopez.jpg"
    },
    {
        "Name": "Carlos Martínez",
        "Email": "carlos.martinez@example.com",
        "Specialty": "Biología",
        "Cost": 24,
        "Photo": "https://example.com/photos/carlos_martinez.jpg"
    },
    {
        "Name": "Lucía Gómez",
        "Email": "lucia.gomez@example.com",
        "Specialty": "Lengua y Literatura",
        "Cost": 18,
        "Photo": "https://example.com/photos/lucia_gomez.jpg"
    },
    {
        "Name": "Juan Pérez",
        "Email": "juan.perez@example.com",
        "Specialty": "Historia",
        "Cost": 20,
        "Photo": "https://example.com/photos/juan_perez.jpg"
    },
    {
        "Name": "Elena Sánchez",
        "Email": "elena.sanchez@example.com",
        "Specialty": "Geografía",
        "Cost": 19,
        "Photo": "https://example.com/photos/elena_sanchez.jpg"
    },
    {
        "Name": "Sofía Díaz",
        "Email": "sofia.diaz@example.com",
        "Specialty": "Inglés",
        "Cost": 23,
        "Photo": "https://example.com/photos/sofia_diaz.jpg"
    },
    {
        "Name": "Miguel Torres",
        "Email": "miguel.torres@example.com",
        "Specialty": "Francés",
        "Cost": 22,
        "Photo": "https://example.com/photos/miguel_torres.jpg"
    },
    {
        "Name": "Laura Romero",
        "Email": "laura.romero@example.com",
        "Specialty": "Alemán",
        "Cost": 24,
        "Photo": "https://example.com/photos/laura_romero.jpg"
    },
    {
        "Name": "Pedro Ruiz",
        "Email": "pedro.ruiz@example.com",
        "Specialty": "Filosofía",
        "Cost": 21,
        "Photo": "https://example.com/photos/pedro_ruiz.jpg"
    },
    {
        "Name": "Marina Morales",
        "Email": "marina.morales@example.com",
        "Specialty": "Economía",
        "Cost": 25,
        "Photo": "https://example.com/photos/marina_morales.jpg"
    },
    {
        "Name": "Sergio Blanco",
        "Email": "sergio.blanco@example.com",
        "Specialty": "Derecho",
        "Cost": 26,
        "Photo": "https://example.com/photos/sergio_blanco.jpg"
    },
    {
        "Name": "Paula Herrera",
        "Email": "paula.herrera@example.com",
        "Specialty": "Psicología",
        "Cost": 23,
        "Photo": "https://example.com/photos/paula_herrera.jpg"
    },
    {
        "Name": "Andrés Vega",
        "Email": "andres.vega@example.com",
        "Specialty": "Sociología",
        "Cost": 22,
        "Photo": "https://example.com/photos/andres_vega.jpg"
    },
    {
        "Name": "Isabel Flores",
        "Email": "isabel.flores@example.com",
        "Specialty": "Arte",
        "Cost": 24,
        "Photo": "https://example.com/photos/isabel_flores.jpg"
    },
    {
        "Name": "Rafael Mendoza",
        "Email": "rafael.mendoza@example.com",
        "Specialty": "Música",
        "Cost": 25,
        "Photo": "https://example.com/photos/rafael_mendoza.jpg"
    },
    {
        "Name": "Cristina Navarro",
        "Email": "cristina.navarro@example.com",
        "Specialty": "Educación Física",
        "Cost": 20,
        "Photo": "https://example.com/photos/cristina_navarro.jpg"
    },
    {
        "Name": "Javier Castillo",
        "Email": "javier.castillo@example.com",
        "Specialty": "Informática",
        "Cost": 26,
        "Photo": "https://example.com/photos/javier_castillo.jpg"
    },
    {
        "Name": "Natalia Ortega",
        "Email": "natalia.ortega@example.com",
        "Specialty": "Ingeniería",
        "Cost": 27,
        "Photo": "https://example.com/photos/natalia_ortega.jpg"
    },
    {
        "Name": "Alejandro Ríos",
        "Email": "alejandro.rios@example.com",
        "Specialty": "Arquitectura",
        "Cost": 28,
        "Photo": "https://example.com/photos/alejandro_rios.jpg"
    },
    {
        "Name": "Carmen Molina",
        "Email": "carmen.molina@example.com",
        "Specialty": "Medicina",
        "Cost": 29,
        "Photo": "https://example.com/photos/carmen_molina.jpg"
    },
    {
        "Name": "Manuel Castro",
        "Email": "manuel.castro@example.com",
        "Specialty": "Enfermería",
        "Cost": 23,
        "Photo": "https://example.com/photos/manuel_castro.jpg"
    },
    {
        "Name": "Beatriz Santos",
        "Email": "beatriz.santos@example.com",
        "Specialty": "Nutrición",
        "Cost": 21,
        "Photo": "https://example.com/photos/beatriz_santos.jpg"
    },
    {
        "Name": "Antonio Ramos",
        "Email": "antonio.ramos@example.com",
        "Specialty": "Agronomía",
        "Cost": 24,
        "Photo": "https://example.com/photos/antonio_ramos.jpg"
    },
    {
        "Name": "Gabriela Cortés",
        "Email": "gabriela.cortes@example.com",
        "Specialty": "Veterinaria",
        "Cost": 26,
        "Photo": "https://example.com/photos/gabriela_cortes.jpg"
    },
    {
        "Name": "Ricardo Silva",
        "Email": "ricardo.silva@example.com",
        "Specialty": "Odontología",
        "Cost": 28,
        "Photo": "https://example.com/photos/ricardo_silva.jpg"
    },
    {
        "Name": "Victoria Reyes",
        "Email": "victoria.reyes@example.com",
        "Specialty": "Farmacia",
        "Cost": 27,
        "Photo": "https://example.com/photos/victoria_reyes.jpg"
    },
    {
        "Name": "Eduardo Ramos",
        "Email": "eduardo.ramos@example.com",
        "Specialty": "Biotecnología",
        "Cost": 30,
        "Photo": "https://example.com/photos/eduardo_ramos.jpg"
    },
    {
        "Name": "Andrea Aguilar",
        "Email": "andrea.aguilar@example.com",
        "Specialty": "Ambiental",
        "Cost": 29,
        "Photo": "https://example.com/photos/andrea_aguilar.jpg"
    }
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
