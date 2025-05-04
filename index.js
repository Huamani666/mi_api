
const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ⚠️ Reemplaza con tu cadena de conexión
const config = {
  user: 'db_ab84d2_waly_admin',
  password: '949466985JORGEl',
  server: 'SQL1003.site4now.net',
  database: 'db_ab84d2_waly',
  options: {
    encrypt: true,
    trustServerCertificate: false
  }
};

app.get('/pedidos_completos', async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query('SELECT * FROM pedidos_completos');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send('Error al obtener los datos: ' + err.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
