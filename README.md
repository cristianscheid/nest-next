# Nest.js & Next.js Product CRUD

## Description

This project is a full stack web app that demonstrates CRUD operations for managing products. It uses Nest.js to build a RESTful API, PostgreSQL for data storage, and Prisma as the ORM. The frontend is built with Next.js and Tailwind CSS, providing a modern, responsive UI. Designed for learning, it showcases clean architecture, type safety, and modern development practices.

### Features

- Full CRUD operations for products (create, read, update, delete)
- Nest.js backend with ValidationPipe and DTOs for input validation
- Next.js frontend using React hooks and Tailwind CSS
- PostgreSQL database with Prisma for efficient queries and migrations
- Toast notifications for instant user feedback

## Built With

![TypeScript][typescript-badge]

![Nest.js][nestjs-badge]
![Node.js][nodejs-badge]
![PostgreSQL][postgresql-badge]

![Next.js][nextjs-badge]
![Tailwind CSS][tailwindcss-badge]

## Visuals

<!-- TODO -->

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository**

   ```
   git clone https://github.com/cristianscheid/nest-next-product-crud.git
   cd nest-next-product-crud
   ```

2. **Set up backend environment**

   - Navigate to the backend directory (`nest-next-product-crud/backend/`).
   - Install dependencies:

     ```
     npm install
     ```

   - Set up environment variables:

     ```
     cp .env.example .env
     ```

3. **Set up frontend environment**

   - Navigate to the frontend directory (`nest-next-product-crud/frontend/`).
   - Install dependencies:

     ```
     npm install
     ```

   - Set up environment variables:

     ```
     cp .env.example .env
     ```

4. **Start PostgreSQL docker container**

   - From root directory (`nest-next-product-crud/`):

     ```
     docker compose up -d
     ```

5. **Start the servers**

   - From backend directory (`nest-next-product-crud/backend/`):

     ```
     npm run dev
     ```

   - From frontend directory (`nest-next-product-crud/frontend/`):

     ```
     npm run dev
     ```

## Usage

Once the application is running, you can access it at `http://localhost:3000`.

## License

Distributed under the MIT License. See LICENSE.txt for more information.

<!-- Badges for 'Built With' section -->

[typescript-badge]: https://img.shields.io/badge/TypeScript-5.8-gray?style=for-the-badge&logo=typescript&logoColor=white
[nestjs-badge]: https://img.shields.io/badge/Nest.js-11.1-gray?style=for-the-badge&logo=nestjs&logoColor=white
[nodejs-badge]: https://img.shields.io/badge/Node.js-22.14-gray?style=for-the-badge&logo=node.js&logoColor=white
[postgresql-badge]: https://img.shields.io/badge/PostgreSQL-17.5-gray?style=for-the-badge&logo=postgresql&logoColor=white
[nextjs-badge]: https://img.shields.io/badge/Next.js-15.3-gray?style=for-the-badge&logo=next.js&logoColor=white
[tailwindcss-badge]: https://img.shields.io/badge/Tailwind%20CSS-4.1-gray?style=for-the-badge&logo=tailwindcss&logoColor=white
