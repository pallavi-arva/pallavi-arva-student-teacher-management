const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  // This links to the Teacher's unique ID in the database
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
  // This is an array of Student IDs enrolled in the course
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

module.exports = mongoose.model('Course', CourseSchema);
