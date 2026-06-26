// Inicializar las librerias
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 4000;

// Configurar EJS (Debe ir antes de las rutas)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views')); // Asegura que Express encuentre la carpeta Views

// Archivos estáticos (CORREGIDO: Solo exponemos las subcarpetas de assets reales)
app.use('/img', express.static(path.join(__dirname, 'Views/img')));
app.use('/css', express.static(path.join(__dirname, 'Views/css')));
// Nota: Quitamos Views/Planetas de aquí para que EJS maneje sus archivos mediante .render() sin interferencias.

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

// Iniciar servidor (Usando la variable PORT directamente)
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});