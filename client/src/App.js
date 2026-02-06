import React, { useState, useEffect } from 'react';

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');

  // Fetching data from our Node.js Backend
  useEffect(() => {
    fetch('http://localhost:5000/api/students')
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  const addStudent = async () => {
    const res = await fetch('http://localhost:5000/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    const newStudent = await res.json();
    setStudents([...students, newStudent]);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Bytelogik Student Management</h1>
      <input 
        className="border p-2 mr-2" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button onClick={addStudent} className="bg-blue-500 text-white p-2 rounded">Add Student</button>
      
      <ul className="mt-4">
        {students.map(s => <li key={s._id} className="bg-white p-2 mb-2 shadow">{s.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
