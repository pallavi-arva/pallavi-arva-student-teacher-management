# Student–Teacher–Course Management System

![Student Management Page](Screenshot1.png)

A lightweight, responsive web module built for the Bytelogik technical assessment. This application allows for management of students, teachers, and courses with relational data linking.

## Features

- **Student Management:** Full CRUD operations (Create, Read, Update, Delete).
- **Teacher Management:** Full CRUD operations (Create, Read, Update, Delete).
- **Course Management:** - Create and Delete courses.
  - Assign one or more teachers to a specific course.
  - Enroll one or more students into a specific course.
- **Relational Views:** - Dedicated page to view all courses with their assigned teachers.
  - Dedicated page to view all courses with their enrolled students.

## Technology Stack

- **Frontend:** HTML5, JavaScript (ES6+), and Tailwind CSS.
- **State Management:** Custom JavaScript state logic to handle entity relationships.
- **Persistence:** Browser `LocalStorage` API (Data persists even after page refresh).
- **Deployment:** GitHub Pages.

## Project Structure

- `index.html`: Contains the entire application logic, styles, and structure in a Single Page Application (SPA) format for easy portability and review.

## How to Run

1. Clone this repository or download the `index.html` file.
2. Open `index.html` in any modern web browser (Chrome, Edge, Firefox).
3. No installation or environment setup (Node.js/Flutter) is required as this is a client-side application.

## Key Logic Explanation

The application uses a **Relational Mapping** strategy. Each `Course` object contains arrays of `studentIds` and `teacherIds`. When a student is enrolled or a teacher is assigned, the system maps these IDs to the respective master lists to ensure data integrity across all 5 pages.
