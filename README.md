# Beauty Center Web Application 💆‍♀️

A modern web application for a women's beauty and skin care center. The system allows users to explore services, book appointments, and manage their bookings in a simple and interactive way.

---

## 🎯 Project Idea
This project is designed to simulate a real-world beauty center system where users can:
- Browse available services  
- Book appointments بسهولة  
- Manage bookings  
- Add reviews  

The system works without a backend by using LocalStorage to simulate real data storage.

---

## 🧠 Problem Solved
Many beauty centers rely on:
- Manual booking  
- WhatsApp communication  
- No organized system  

This project provides a simple digital solution to improve the booking experience.

---

## 🏗️ System Structure

### 🏠 Home Page
- Attractive landing page  
- Overview of services  
- Quick booking access  

---

### 💆‍♀️ Services Page
- Services displayed as cards  
- Each service includes:
  - Image  
  - Name  
  - Description  
  - Price  

Features:
- Search  
- Filtering  

---

### 📄 Service Details Page
- Full service information  
- Booking button  
- Add review option  

Data is passed using:
```js
localStorage.setItem("serviceId", id);
