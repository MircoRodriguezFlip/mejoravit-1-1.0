// Importar dependencias
require('dotenv').config(); // Asegúrate de cargar las variables de entorno
const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
app.use(cors());

// Middleware para analizar JSON
app.use(express.json());

// Ruta para manejar el envío de los datos del formulario
app.post('/submit', async (req, res) => {
    const { nombre, telefono, seguroSocial } = req.body;

    try {
        // Realiza la solicitud a Airtable desde el servidor (Backend)
        const response = await axios.post(
            `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
            {
                fields: {
                    Name: nombre,
                    Phone: telefono,
                    NSS: seguroSocial,
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        // Devuelve una respuesta al frontend
        res.status(200).json({ message: 'Datos enviados correctamente', data: response.data });
    } catch (error) {
        console.error('Error al enviar los datos a Airtable:', error);
        res.status(500).json({ message: 'Hubo un error al enviar los datos' });
    }
});

// Configurar el servidor para escuchar en el puerto 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
