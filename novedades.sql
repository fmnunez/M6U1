-- Crear tabla de novedades
CREATE TABLE IF NOT EXISTS novedades (
 id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
 titulo VARCHAR(250) NOT NULL,
 subtitulo TEXT NOT NULL,
 cuerpo TEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
-- Insertar novedades de prueba
INSERT INTO novedades (titulo, subtitulo, cuerpo) VALUES
('Lanzamiento de nuevo producto', 'Novedades del trimestre', 'Estamos orgullosos de presentar nuestro nuevo servicio web.'),
('Capacitaciones de fin de año', 'Inscripciones abiertas', 'Ya se encuentran abiertas las inscripciones para los talleres intensivos.');
