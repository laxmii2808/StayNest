# StayNest – Find Your Perfect Nest Anywhere

Welcome to **StayNest**, my full-stack web application that helps people discover, list, and review beautiful vacation stays — from cozy cabins to scenic beach houses. Think of it like a simpler, developer-built version of Airbnb. 

This project is built using the **MERN Stack** and follows the **MVC (Model-View-Controller)** architecture to keep things modular, clean, and scalable.

---

## What is StayNest?

**StayNest** is a rental listing platform where:
- Users can browse and search for vacation homes.
- Logged-in users can list their own properties.
- Guests can review listings.
- Admin functionalities are limited to listing owners only (edit/delete access).
- All uploaded images are stored using **Cloudinary** for efficient image handling.

---

## Project Goals

The aim of this project is to:
- Practice full-stack web development using the MERN stack.
- Understand how to build scalable apps using the MVC pattern.
- Learn how to handle user authentication and authorization.
- Implement real-world features like image uploads, session handling, and CRUD operations.

---

## Architecture – MVC (Model-View-Controller)

I’ve followed the **MVC design pattern** to separate concerns:

1. **Models (`/models`)**  
   These define how data is structured using Mongoose schemas:
   - `Listing.js`: Stores all property data like title, price, description, location, images, category, etc.
   - `User.js`: Handles user information and authentication.
   - `Review.js`: Manages user reviews and ratings.

2. **Views (`/views`)**  
   Built with **EJS**, this is the part of the app users interact with. Templates are rendered dynamically using server-side data.

3. **Controllers (`/controllers`)**  
   These handle all the logic for:
   - Creating, reading, updating, and deleting listings and reviews.
   - Authenticating users.
   - Managing image uploads and user permissions.

4. **Routes (`/routes`)**  
   Contains all Express routes, separated for listings, reviews, and user auth to keep code organized.

---

## CRUD Operations (Create, Read, Update, Delete)

**StayNest** supports full CRUD functionality for listings and reviews:

### Listings
| Action   | Method | Route              | Description                           |
|----------|--------|--------------------|---------------------------------------|
| Create   | POST   | `/listings`        | Add a new stay to the platform        |
| Read     | GET    | `/listings`        | View all available listings           |
| Read     | GET    | `/listings/:id`    | View details of a specific listing    |
| Update   | PUT    | `/listings/:id`    | Edit your own listing                 |
| Delete   | DELETE | `/listings/:id`    | Remove your own listing               |

### Reviews
| Action   | Method | Route                          | Description                      |
|----------|--------|--------------------------------|----------------------------------|
| Create   | POST   | `/listings/:id/reviews`        | Add a review to a listing        |
| Delete   | DELETE | `/listings/:id/reviews/:rid`   | Delete your own review           |

---

## Technologies Used

### Backend
- **Node.js** and **Express.js** – For building APIs and handling server logic.
- **MongoDB + Mongoose** – For database and schema modeling.
- **Passport.js** – For authentication (login/register).
- **Multer + Cloudinary** – For image uploads and storage.
- **Express-session & connect-flash** – For user sessions and messages.
- **dotenv** – For managing environment variables securely.

### Frontend
- **EJS** – For rendering dynamic templates.
- **Bootstrap 5** – For responsive design and pre-styled UI components.
- **Custom CSS** – To fine-tune styling.

---

##  How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/laxmii2808/wanderer-app.git
cd wanderer-app
