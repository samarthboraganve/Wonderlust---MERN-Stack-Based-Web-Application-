# Wonderlust-MERN Stack Based Web Application 

🌍 WonderLust – MERN Stack Based Vacation Rental Platform 🏡

📘 Project Overview

WonderLust is a feature-rich Full Stack Web Application that provides an intuitive platform for exploring, listing, and booking vacation accommodations such as houses, villas, and farmhouses. The application empowers users to browse available properties, make secure bookings, and even list their own accommodations for rent.

Built with a scalable MERN architecture, WanderLust offers a seamless experience through a combination of a responsive front-end, robust back-end, cloud-based image storage, and real-time map integration. The platform prioritizes both performance and user experience, offering fast authentication, advanced search and filtering, and secure session management.

🌐 Front-End Development

Technologies Used:

HTML5, CSS3, JavaScript (ES6+), Bootstrap, and EJS

Framework: React.js

Key Features:

📱 Responsive Design: Ensures smooth functionality across desktops, tablets, and mobile devices.

🧭 Interactive UI/UX: Designed for easy navigation and quick access to listings and bookings.

🗺️ Mapbox API Integration: Displays property locations and enables location-based search features.

🔍 Dynamic Search & Filter: Allows users to find properties based on price, type, and location.

🛠️ Back-End Development

Technologies Used:

Node.js

Express.js

Core Functionalities:

🧩 RESTful API Architecture: Enables smooth data exchange between the front-end and back-end.

🔒 Authentication & Authorization: Implemented using Passport.js and JWT (JSON Web Token) for secure login and session handling.

🏷️ Booking System: Manages property reservations and availability in real time.

💬 Flash Messages & Notifications: Provides feedback for user actions (e.g., login success, booking confirmation).

🗄️ Database Management

Database: MongoDB Atlas (Cloud-hosted NoSQL Database)
ODM Tool: Mongoose

Features:

🗂️ Efficient Data Modeling: Structured schemas for users, properties, and bookings.

🔍 Optimized Queries: For quick data retrieval and manipulation.

⚙️ Relationship Mapping: Ensures scalable and maintainable data flow between models.


☁️ Cloudinary Integration (Image Management)

All property images are uploaded and stored on Cloudinary, ensuring secure, fast, and optimized image delivery.

📸 Efficient Image Handling: Supports automatic resizing and compression.

☁️ Cloud Storage: Guarantees reliability and improved load times across devices.

🌟 Additional Functionalities

⭐ User Reviews & Ratings: Allows guests to review properties and provide feedback.

🔐 Enhanced Security: Data validation using Joi, cookie encryption, and secure sessions.

🗺️ Real-Time Map Visualization: Enables users to explore properties visually on the map.

🎨 EJS Templates: Used for modular and dynamic rendering of server-side views.

🍪 Cookies & Sessions: Managed using Cookie Parser and Express Session for smooth authentication and user tracking.

🏗️ MVC Architecture: Promotes clean, maintainable, and scalable code structure.

💾 Multer Integration: Handles file uploads for property images and user profiles.

⚡ Connect Flash & Connect Mongo: Manage flash messages and store session data efficiently.

🚀 Deployment

The WonderLust application is deployed on Render, ensuring high availability and scalability.
It is fully integrated with MongoDB Atlas for database management and Cloudinary for image storage.

Live Demo: [WonderLust Project Link]

✍️ Authors

Developed by:
https://github.com/samarthboraganve

🧰 Technologies & Packages Used
Category	Tools / Packages
Database	MongoDB, Mongoose
Back-End	Node.js, Express.js
Front-End	React.js, EJS, Bootstrap
Authentication	Passport.js, Passport Local, Passport Local Mongoose, JWT
Validation & Security	Joi, Express Session, Cookie Parser, Dotenv
File Handling	Multer, Cloudinary
Session & Flash	Connect Flash, Connect Mongo
Map Integration	Mapbox API
Architecture	MVC (Model-View-Controller)


⚙️ Installation & Setup Guide for WonderLust 🌍

Before you begin, ensure that your system meets the following requirements:

✅ Prerequisites

Node.js – Version 18 or above (recommended)

MongoDB – Installed and running locally or accessible via a remote connection

Nodemon – Installed globally for automatic server restarts

🧩 Step 1: Clone the Repository

Start by cloning the WonderLust project from GitHub to your local machine:

git clone https://github.com/samarthboraganve/Wonderlust---MERN-Stack-Based-Web-Application-.git


Navigate into the project directory:

cd Wonderlust-Major-Project

🗄️ Step 2: Configure the Database

In the root directory of your project, create a new file named .env.

Add your local MongoDB connection string:

ATLASDB_URL=mongodb://127.0.0.1:27017/wonderlust


If you’re using MongoDB Atlas, replace this with your Atlas connection URI.

☁️ Step 3: Set Up Cloudinary for Image Storage

Go to Cloudinary
 and create a free account.

Once logged in, find your Cloud Name, API Key, and API Secret in your dashboard.

Add the following lines to your .env file:

CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret

🔐 Step 4: Add a Secret Key

To enhance security, define a secret key for your session and encryption processes.
Add this line to your .env file:

SECRET=your_secure_secret_key


Use a strong, random value for better security.

📦 Step 5: Install Dependencies

Install all required dependencies using npm:

npm install


This command will automatically download and set up all packages listed in your package.json file.

🚀 Step 6: Run the Application

Start the development server using Nodemon:

nodemon app.js


Once the server starts successfully, open your browser and visit:

http://localhost:8080/listing

🎉 You’re All Set!

Congratulations! 🎊 You’ve successfully installed and configured the WonderLust web application on your local machine.

If you encounter any issues during setup, double-check your environment variables and database connection. You can also reach out to the development team or raise an issue in the GitHub repository.

Enjoy exploring and managing vacation listings with WonderLust — your gateway to effortless travel planning! ✈️🏡




💡 Summary

WanderLust demonstrates end-to-end full-stack web development expertise — combining modern frameworks, secure authentication mechanisms, cloud integration, and clean UI/UX design. It delivers an all-in-one platform for exploring, listing, and booking accommodations with a focus on scalability, responsiveness, and user trust.
