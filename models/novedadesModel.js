const pool = require('../bd');
// Traer todas las novedades (Read)
async function getNovedades() {
 try {
 const query = 'SELECT * FROM novedades ORDER BY id DESC';
 const rows = await pool.query(query);
 return rows;
 } catch (error) {
 console.error(error);
 throw error;
 }
}
// Insertar una nueva novedad (Create)
async function insertNovedad(body) {
 try {
 const query = 'INSERT INTO novedades SET ?';
 const rows = await pool.query(query, [body]);
 return rows;
 } catch (error) {
 console.error(error);
 throw error;
 }
}
module.exports = { getNovedades, insertNovedad };
