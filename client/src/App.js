import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [tableName, setTableName] = useState('');
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  const fetchTable = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/table/${tableName}`);
      setData(res.data);
      setColumns(res.data.length ? Object.keys(res.data[0]) : []);
    } catch (err) {
      alert('Hata: ' + err.message);
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