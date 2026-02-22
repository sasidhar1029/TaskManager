# 📌 Task Manager — React + Spring Boot

A simple **Task Manager CRUD application** built using **Spring Boot (Backend)** and **React (Frontend)**.

This project allows users to create, view, update, and delete tasks with completion status.

---

## 🚀 Tech Stack

### 🔹 Backend

* Java 17+
* Spring Boot
* Spring Data JPA
* MySQL
* Lombok

### 🔹 Frontend

* React
* Axios
* CSS

---

## ✨ Features

✅ Create Task
✅ View Tasks
✅ Update Task
✅ Delete Task
✅ Dashboard Stats (Total & Completed Tasks)
✅ Simple UI with Navbar

---

## 📂 Project Structure

### Backend (Spring Boot)

```
controller
 └── TaskController

service
 └── TaskService

repo
 └── TaskRepository

entity
 └── Task
```

### Frontend (React)

```
components
 ├── Navbar
 ├── Dashboard
 ├── Tasks
 └── CreateTask

services
 └── api.js
```

---

## ⚙️ Backend Setup

### 1️⃣ Clone project

```
git clone <your-repo-url>
```

### 2️⃣ Configure MySQL

Create database:

```
create database hostels_db;
```

Update **application.properties**

```
server.port=9090

spring.datasource.url=jdbc:mysql://localhost:3306/hostels_db
spring.datasource.username=root
spring.datasource.password=root

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 3️⃣ Run Spring Boot

```
mvn spring-boot:run
```

Backend runs on:

```
http://localhost:9090
```

---

## 💻 Frontend Setup

### 1️⃣ Go to frontend folder

```
cd frontend
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Run React app

```
npm start
```

Frontend runs on:

```
http://localhost:3002
```

---

## 🔌 API Endpoints

| Method | Endpoint        | Description   |
| ------ | --------------- | ------------- |
| GET    | /api/tasks      | Get all tasks |
| POST   | /api/tasks      | Create task   |
| PUT    | /api/tasks/{id} | Update task   |
| DELETE | /api/tasks/{id} | Delete task   |

---

## 🧪 Sample JSON

### Create Task

```
{
  "title": "Learn Spring Boot",
  "description": "Build CRUD project",
  "completed": false
}
```

---

## 📊 Dashboard Logic

Dashboard calculates:

* Total tasks count
* Completed tasks count

---

## 🌐 CORS Configuration

Backend allows React:

```
@CrossOrigin(origins = "http://localhost:3002")
```

---

## 🎯 Learning Goals

This project helps you learn:

* Spring Boot CRUD
* REST APIs
* React Axios integration
* Full stack communication
* Project structure (interview important)

---

## 🔮 Future Improvements

⭐ Authentication (JWT)
⭐ Update UI
⭐ Pagination
⭐ Search / Filter
⭐ Deploy (Render / Railway / Vercel)
⭐ Docker

---

## 👨‍💻 Author

**Sasidhar Reddy**
Java Full Stack Developer (Fresher)

---

## ⭐ If you like this project

Give ⭐ on GitHub 🙂
