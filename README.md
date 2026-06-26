# MERN Calculator Backend

## Overview

This repository contains the backend API for the MERN Calculator application. It is built using **Node.js**, **Express.js**, and **MongoDB**.

The backend is responsible for storing and managing calculator history, supporting soft deletion, and filtering calculations by date.

---

## Features

* Save calculation history
* Retrieve all calculations
* Soft delete history records
* Filter history by calculation date
* RESTful API architecture

---

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* Dotenv
* Nodemon

---

## Project Structure

```text
backend/
│
├── config/
├── controllers/
├── models/
├── routes/
├── .env
├── server.js
├── package.json
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone <repository-url>
cd backend
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/calculator
```

### Start the development server

```bash
npm run dev
```

Server will run on:

```text
http://localhost:5000
```

---

## API Endpoints

### Get all calculation history

```http
GET /api/history
```

### Save a calculation

```http
POST /api/history
```

Example Request Body:

```json
{
  "equation": "5 + 5",
  "result": "10",
  "operationType": "addition"
}
```

### Soft delete a calculation

```http
DELETE /api/history/:id
```

---

## Future Improvements

* User authentication
* Pagination for history
* Search functionality
* Export history as PDF/CSV

---

## Author

**Ahmad Mujtaba**
