import React, { useState } from 'react';
import axios from 'axios';
import { getServerUrl } from './config';

function App() {
  const [tableName, setTableName] = useState('');
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [error, setError] = useState('');

  const fetchTable = async () => {
    try {
      setError('');
      const res = await axios.get(`${getServerUrl()}/table/${tableName}`);
      setData(res.data);
      setColumns(res.data.length ? Object.keys(res.data[0]) : []);
    } catch (err) {
      const errorMessage = err.response?.data?.error || err.message;
      setError('Hata: ' + errorMessage);
      setData([]);
      setColumns([]);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>PostgreSQL Tablo Görüntüleyici</h2>
      <input
        value={tableName}
        onChange={(e) => setTableName(e.target.value)}
        placeholder="Tablo adı girin"
      />
      <button onClick={fetchTable}>Göster</button>

      {error && <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>}

      {columns.length > 0 && (
        <table border="1" cellPadding="8" style={{ marginTop: '1rem' }}>
          <thead>
            <tr>{columns.map(col => <th key={col}>{col}</th>)}</tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>{columns.map(col => <td key={col}>{row[col]}</td>)}</tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;