# Wanderlust | Travel & Accommodation Platform

Wanderlust is a **full-stack web application** designed to be a modern travel and accommodation booking platform.  
It allows users to **browse, create, and manage listings** for unique stays and experiences worldwide.  
Built using the **Model-View-Controller (MVC) pattern**, it ensures a clean separation of concerns and a scalable codebase.  

Whether you're looking for a cozy cabin in the woods or a vibrant city apartment, Wanderlust connects you with a diverse range of accommodations.

---

##  Key Features

- **User Authentication:** Secure sign-up, log-in, and log-out functionality.  
- **Listing Management:** Create, view, edit, and delete listings.  
- **Detailed Listings:** Each listing includes a title, description, location, price, and images.  
- **Image Uploads:** Integrated with Cloudinary for secure cloud storage of listing images.  
- **Responsive Design:** Works seamlessly on desktops, tablets, and mobile devices.  

---

##  Technologies Used

**Frontend:**  
- EJS (Embedded JavaScript templates)  
- HTML5, CSS3, JavaScript  

**Backend:**  
- Node.js with Express.js  

**Database:**  
- MongoDB (NoSQL)  
- Mongoose (ODM for MongoDB)  

**Cloud Services:**  
- Cloudinary (for image hosting)  

**Other Dependencies:**  
- dotenv (environment variables management)  
- express-session (session management)  
- connect-mongo (MongoDB session storage)  
- passport (authentication)

---

## 📁 Project Folder Structure

```
AIRNUB_PROJECT_WEB/
├── controllers/
├── init/
├── models/
├── node_modules/
├── public/
├── routes/
├── utils/
├── views/
│ ├── includes/
│ │ ├── flash.ejs
│ │ ├── footer.ejs
│ │ └── navbar.ejs
│ ├── layouts/
│ │ └── boilerplate.ejs
│ ├── listings/
│ │ ├── edit.ejs
│ │ ├── index.ejs
│ │ ├── new.ejs
│ │ └── show.ejs
│ ├── users/
│ │ └── error.ejs
├── .env
├── .gitignore
├── app.js
├── cloudConfig.js
├── middleware.js
├── package-lock.json
├── package.json
└── schema.js

```


---

##  Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed on your machine  
- MongoDB database (local or cloud)

---

### Installation

Clone the repository:

```bash
git clone https://github.com/Sundaram-Dev/AIRNUB_PROJECT_WEB.git
cd AIRNUB_PROJECT_WEB
npm install
```

### Environment Variables

```bash
DB_URL=[Your_MongoDB_Connection_String]
CLOUDINARY_CLOUD_NAME=[Your_Cloudinary_Cloud_Name]
CLOUDINARY_KEY=[Your_Cloudinary_API_Key]
CLOUDINARY_SECRET=[Your_Cloudinary_API_Secret]
```

### Running the Application
```bash
node app.js
http://localhost:3000
```

##  Contact Me

I'm passionate about web development and always open to connecting with other developers or exploring new opportunities.

💼 LinkedIn: [linkedin.com/in/sundaram-5695b629a](https://www.linkedin.com/in/sundaram-5695b629a/)  
📧 Email: [sundaram95802@gmail.com](mailto:sundaram95802@gmail.com)  
💻 GitHub: [github.com/Sundaram-Dev](https://github.com/SundaramDev)

---

## This README includes:

- Project overview  
- Features  
- Tech stack  
- Complete folder structure  
- Setup instructions with `.env` guidance  
- Screenshot linking to live site  
- Professional contact links with **new tab behavior**  

---




