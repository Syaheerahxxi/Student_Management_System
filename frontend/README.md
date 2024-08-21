
# Student Management System

This project is a simple Student Management System built with React and Node.js using Express. It allows users to create, read, update, and delete student records from a MySQL database. The project demonstrates basic CRUD operations and routing in a React and Node.js environment.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Create Student**: Add a new student record to the database.
- **Read Students**: View a list of all students stored in the database.
- **Update Student**: Modify existing student records.
- **Delete Student**: Remove student records from the database.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- MySQL server installed and running
- Basic knowledge of React, Node.js, and MySQL

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Syaheerahxxi/student-management-system.git
   cd student-management-system
   ```

2. **Set up the MySQL database:**

   - Create a database named `student`.
   - Create a table named `student` with the following schema:

     ```sql
     CREATE TABLE student (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(100),
         email VARCHAR(100),
         marks INT,
         grade VARCHAR(10),
         city VARCHAR(100)
     );
     ```

3. **Set up the backend:**

   - Navigate to the backend directory:

     ```bash
     cd backend
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Update `server.js` with your MySQL database credentials if necessary.

4. **Set up the frontend:**

   - Navigate to the frontend directory:

     ```bash
     cd frontend
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

## Running the Application

1. **Start the backend server:**

   ```bash
   cd backend
   npm start
   ```

   The backend server will run on `http://localhost:5001`.

2. **Start the frontend development server:**

   ```bash
   cd frontend
   npm start
   ```

   The frontend application will run on `http://localhost:3000`.

## Project Structure

```plaintext
├── backend
│   ├── server.js         # Express server and API routes
├── frontend
│   ├── src
│   │   ├── App.js        # Main App component
│   │   ├── Student.js    # Component to display and manage student data
│   │   ├── CreateStudent.js # Component to create a new student
│   │   ├── UpdateStudent.js # Component to update existing student data
├── README.md             # Project documentation
```

## API Endpoints

The following API endpoints are available:

- **GET /**: Retrieve all student records.
- **POST /create**: Create a new student record.
- **PUT /update/:id**: Update an existing student record.
- **DELETE /student/:id**: Delete a student record.

## Screenshots

### Student List View
![Student List View](/frontend/src/student%20list%20view.JPG)

### Add Student Form
![Add Student Form](/frontend/src/add%20student.JPG)

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any enhancements or bug fixes.


