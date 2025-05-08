const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const config = require('../config');

const app = express();
const port = config.server.port;
app.use(cors());

const pool = new Pool(config.database);

app.get('/table/:name', async (req, res) => {
  const tableName = req.params.name;
  if (!/^[a-zA-Z0-9_]+$/.test(tableName)) {
    return res.status(400).json({ error: 'Geçersiz tablo adı' });
  }

  try {
    const result = await pool.query(`SELECT * FROM ${config.database.schema}.${tableName} LIMIT 100`);
    res.json(result.rows);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://${config.server.host}:${port}`);
});