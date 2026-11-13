const express = require('express');
const router = express.Router();
const novedadesModel = require('../../models/novedadesModel');
// GET: Mostrar el listado de novedades
router.get('/', async (req, res) => {
 try {
 const novedades = await novedadesModel.getNovedades();
 res.render('admin/novedades', { novedades });
 } catch (error) {
 console.error(error);
 res.status(500).send('Error al cargar las novedades');
 }
});
// GET: Mostrar formulario de agregar
router.get('/agregar', (req, res) => {
 res.render('admin/agregar');
});
// POST: Procesar la nueva novedad
router.post('/agregar', async (req, res) => {
 try {
 if (req.body.titulo !== "" && req.body.subtitulo !== "" && req.body.cuerpo !== "") {
 await novedadesModel.insertNovedad(req.body);
 res.redirect('/admin/novedades');
 } else {
 res.render('admin/agregar', {
 error: true,
 message: 'Todos los campos son requeridos'
 });
 }
 } catch (error) {
 console.error(error);
 res.render('admin/agregar', {
 error: true,
 message: 'No se pudo cargar la novedad'
 });
 }
});
module.exports = router;
