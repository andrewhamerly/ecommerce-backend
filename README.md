# E-commerce Backend Project

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Introduction

This project involves building the back end for an e-commerce site using Express.js and Sequelize with a PostgreSQL database. It demonstrates a functional API capable of handling CRUD operations for categories, products, and tags. The project includes database configuration, schema creation, and data seeding.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/andrewhamerly/ecommerce-backend.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd ecommerce-backend
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following:
    ```env
    DB_NAME=your_database_name
    DB_USER=your_postgresql_username
    DB_PASSWORD=your_postgresql_password
    ```

## Usage

1. **Create and seed the database:**
    ```bash
    psql -U postgres
    \i db/schema.sql
    npm run seed
    ```

2. **Start the application:**
    ```bash
    npm start
    ```

3. **Testing the API routes:**
    Use Insomnia or a similar API client to test the following routes:
    - GET `/api/categories`
    - GET `/api/products`
    - GET `/api/tags`
    - POST `/api/categories`
    - POST `/api/products`
    - POST `/api/tags`
    - PUT `/api/categories/:id`
    - PUT `/api/products/:id`
    - PUT `/api/tags/:id`
    - DELETE `/api/categories/:id`
    - DELETE `/api/products/:id`
    - DELETE `/api/tags/:id`

## Walkthrough Video

[Click here to watch the walkthrough video](https://drive.google.com/file/d/1d3foP10ZnjivZjO8H7a1ybVLonJbjkQx/view?usp=sharing)

## Technologies Used

- Node.js
- Express.js
- Sequelize
- PostgreSQL
- dotenv

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

## Questions

If you have any questions about the project, please feel free to contact me via email at [contact@andrewhamerly.com](mailto:contact@andrewhamerly.com). You can also find more of my work on [GitHub](https://github.com/andrewhamerly).
