const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 4000;
app.use(cors());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: '12345678',
  port: 5432,
});

app.get('/table/:name', async (req, res) => {
  const tableName = req.params.name;
  if (!/^[a-zA-Z0-9_]+$/.test(tableName)) {
    return res.status(400).json({ error: 'Geçersiz tablo adı' });
  }

  try {
    const result = await pool.query(`SELECT * FROM employees.${tableName} LIMIT 100`);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});