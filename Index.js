// Inicializar las librerias
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 4000;

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'Views/Planetas')));
app.use(express.static(path.join(__dirname, 'Views/img')));
app.use(express.static(path.join(__dirname, 'Views/css')));

// Configurar EJS (CORREGIDO)
app.set('view engine', 'ejs');

// Rutas
app.get('/home', (req, res) => {
    res.render('Planetas/menu');
});

app.get('/Planetas', (req, res) => {
    res.render('Planetas/index');
});

app.get('/Planetas/Venus', (req, res) => {
    res.render('Planetas/Venus');
});

app.get('/Planetas/Tierra', (req, res) => {
    res.render('Planetas/Tierra');
});

app.get('/Planetas/Marte', (req, res) => {
    res.render('Planetas/Marte');
});

app.get('/Planetas/Mercurio', (req, res) => {
    res.render('Planetas/Mercurio');
});

app.get('/Planetas/Jupiter', (req, res) => {
    res.render('Planetas/Jupiter');
});

app.get('/Planetas/Saturno', (req, res) => {
    res.render('Planetas/Saturno');
});

app.get('/Planetas/Neptuno', (req, res) => {
    res.render('Planetas/Neptuno');
});

app.get('/Planetas/Urano', (req, res) => {
    res.render('Planetas/Urano');
});

// Iniciar servidor
const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});