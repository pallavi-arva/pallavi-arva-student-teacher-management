const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Replace with your MongoDB connection string
mongoose.connect('mongodb://localhost:27017/bytelogik');

const Student = require('./models/Student');
const Teacher = require('./models/Teacher');
const Course = require('./models/Course');

// API Routes
app.get('/api/students', async (req, res) => res.json(await Student.find()));
app.post('/api/students', async (req, res) => res.json(await new Student(req.body).save()));

app.get('/api/courses', async (req, res) => {
    const courses = await Course.find().populate('teacher students');
    res.json(courses);
});

app.listen(5000, () => console.log('Server running on port 5000'));
