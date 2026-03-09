# Find Your Place 🌍

A full-stack MERN application where users can create, view, and manage places with images and map locations.

This project allows users to share places they like, upload images, and view the location on an interactive map.

---

## 🚀 Features

* User authentication (Signup / Login)
* Create new places with image upload
* View places created by users
* Edit and delete places
* Interactive map view for each place
* Image storage using backend uploads
* REST API built with Node.js & Express
* MongoDB database integration

---

## 🛠️ Tech Stack

**Frontend**

* React.js
* React Router
* CSS

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose

**Other Tools**

* Multer (Image Upload)
* OpenStreetMap / Leaflet (Map)
* REST API

---

## 📂 Project Structure

```
Find-Your-Place
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── app.js
│
├── frontend
│   ├── src
│   │   ├── places
│   │   ├── shared
│   │   └── user
│   └── public
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/Swastik99-git/find-your-place.git
```

### 2️⃣ Install backend dependencies

```
cd backend
npm install
```

### 3️⃣ Start backend server

```
npm start
```

Server runs on:

```
http://localhost:5000
```

---

### 4️⃣ Install frontend dependencies

Open a new terminal:

```
cd frontend
npm install
```

### 5️⃣ Start React app

```
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🗺️ Map Integration

This project uses **OpenStreetMap with Leaflet** to display the location of each place.

Each place contains coordinates that are displayed when clicking **View on Map**.

---

## 📸 Image Upload

Images are uploaded using **Multer middleware** and stored in the backend `uploads/images` folder.

---

## 🔮 Future Improvements

* Address → Coordinates conversion
* Map location picker
* Improved UI design
* Search & filter places
* Deployment (Render / Vercel)

---

## 👨‍💻 Author

**Swastik Biswal**

GitHub:
https://github.com/Swastik99-git

---

⭐ If you like this project, consider giving it a star!
