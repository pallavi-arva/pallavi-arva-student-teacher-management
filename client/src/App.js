import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State for storing our data
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);

  // Fetch data from our Node.js Backend when the page loads
  useEffect(() => {
    fetch('http://localhost:5000/api/students')
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-blue-600">Bytelogik Management System</h1>
        <p className="text-gray-600">MERN Stack Edition</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Student Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Students</h2>
          <ul>
            {students.map(student => (
              <li key={student._id} className="py-2 border-bottom">{student.name}</li>
            ))}
          </ul>
        </section>

        {/* Course Section (The Relational Part) */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Active Courses</h2>
          {courses.length === 0 ? <p className="text-sm text-gray-400">No courses assigned yet.</p> : null}
        </section>
      </div>
    </div>
  );
}

export default App;
