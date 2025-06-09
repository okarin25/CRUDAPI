# 🛍️ Product CRUD API

This is a Node.js-based RESTful API for managing products using Express and MongoDB. It supports creating, reading, and deleting products — ideal for e-commerce backends or learning full-stack API development.

---

## 🚀 Features

- Create a new product
- Fetch all products
- Fetch a product by ID
- Delete a product by ID
- Error handling with appropriate status codes

---

## 📁 Folder Structure

CRUDAPI/
├── src/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── index.js
├── .env
├── .gitignore
├── package.json
└── README.md


---


---

## ⚙️ Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

---

## 🔧 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/okarin25/CRUDAPI.git
cd CRUDAPI
```

### 2. Install dependencies

```bash
npm install
```
### 3. Create a .env file
```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```
### 4. Start the server
```bash
npm start
```
The server will start on http://localhost:5000.

## 📡 API Endpoints
➕ Create Product

    POST /api/product/createProduct

Request Body:
```json
{
  "name": "Test Product",
  "description": "This is a test product",
  "price": 10.99,
  "category": "Test Category",
  "stock": 10
}
```
Response 201 Created:
```json
{
  "message": "Product created successfully",
  "product": { ... }
}
```
📥 Get All Products

    GET /api/product/getAllProducts

Response 200 OK:
```json
{
  "message": "Products fetched successfully",
  "products": [ ... ]
}
```
🔍 Get Product by ID

    GET /api/product/getProductById/:id

Response 200 OK:
```json
{
  "message": "Product fetched successfully",
  "product": { ... }
}
```
❌ Delete Product by ID

    DELETE /api/product/deleteProductById/:id

Response 200 OK:
```json
{
  "message": "Product deleted successfully"
}
```

🧪 Testing

You can test the API using:

    Postman

    cURL in your terminal

Example cURL:
```
curl -X GET http://localhost:5000/api/product/getAllProducts
```
### 📝 License

This project is for educational and demonstration purposes.


### 👨‍💻 Author
Arpit Vishwakarma
[GitHub](https://github.com/okarin25) | [LinkedIn](https://www.linkedin.com/in/arpit-vishwakarma-028697170/)





