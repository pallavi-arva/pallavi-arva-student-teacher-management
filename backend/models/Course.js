const mongoose = require('mongoose');
const CourseSchema = new mongoose.Schema({
  name: String,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});
module.exports = mongoose.model('Course', CourseSchema);
