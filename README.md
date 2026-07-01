# MERN Calculator Backend

## Overview

This repository contains the backend of a MERN Stack Calculator application developed using **Node.js**, **Express.js**, and **MongoDB**.

The backend exposes REST APIs for managing calculator history. It stores every calculation in MongoDB, supports soft deletion, and provides endpoints for retrieving calculation records.

---

## Features

* RESTful API built with Express.js
* MongoDB integration using Mongoose
* Save calculation history
* Retrieve all calculations
* Soft delete support (records are marked as deleted instead of permanently removed)
* Date-based history filtering
* Modular project structure using MVC architecture
* Environment variable configuration using Dotenv
* CORS enabled for frontend integration

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Dotenv
* CORS
* Nodemon

---

## Folder Structure

```text
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── historyController.js
│
├── models/
│   └── history.js
│
├── routes/
│   └── historyRoutes.js
│
├── .env
├── package.json
├── server.js
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd backend
```

### Install Dependencies

```bash
npm install
```

### Create Environment File

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/calculator
```

### Start Development Server

```bash
npm run dev
```

The backend runs at:

```text
http://localhost:5000
```

---

## API Endpoints

### Get All Calculations

```http
GET /api/history
```

### Save Calculation

```http
POST /api/history
```

### Soft Delete Calculation

```http
DELETE /api/history/:id
```

---

## Future Improvements

* User authentication
* Pagination
* Search functionality
* Export calculation history
* Unit testing

---

## Author

**Ahmad Mujtaba**
