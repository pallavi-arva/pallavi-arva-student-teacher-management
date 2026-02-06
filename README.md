##Student-Teacher-Course Management System
This project is a comprehensive management module designed for Bytelogik. It has evolved from a rapid prototype into a full-scale MERN Stack application to demonstrate both frontend design and backend architectural skills.

Project Evolution
Phase 1 (Prototype): Initial development using HTML5, Tailwind CSS, and Vanilla JavaScript for quick UI/UX validation.

Phase 2 (Scalable Architecture): Refactored into the MERN Stack (MongoDB, Express, React, Node.js) to support persistent data, relational mapping, and server-side logic.

🛠️ Tech Stack
Frontend: React.js (Hooks & State Management)

Styling: Tailwind CSS (Responsive Design)

Backend: Node.js & Express.js

Database: MongoDB via Mongoose (Relational Modeling)

Database & Relational Logic
Unlike simple flat data, this version uses Mongoose Object IDs to create real relationships between entities:

Students: Independent entity.

Teachers: Independent entity.

Courses: A relational bridge that links a Teacher ID and an array of Student IDs to a specific course title.

Screenshots:
![Student Management Page](Screenshot1.png)
![Course Management Page](Screenshot2.png)
![Course-Teacher Page](Screenshot3.png)

Installation & Setup
To run this project locally:

1.Clone the repository:
  git clone https://github.com/pallavi-arva/pallavi-arva-student-teacher-management.git

2.Setup Backend:
  cd backend
  npm install
  npm start
  
3.Setup Frontend:
 cd client
 npm install
 npm start
