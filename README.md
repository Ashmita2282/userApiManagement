# User Management API

## Project Overview

The User Management API allows management of user data through various operations, including creating, retrieving, updating, and deleting users. Built with Express.js, this API utilizes a dummy dataset stored in `usersData.js`. Key features include:

- **CRUD Operations**: Create, Read, Update, and Delete user functionalities.
- **Middleware**: Implements logging of request details (HTTP method, URL, and status code) for better visibility and input validation for POST and PUT routes.
- **Error Handling**: Provides meaningful HTTP status codes and messages for scenarios like "user not found" or "invalid input."
- **In-Memory Data Storage**: User data is stored in an in-memory array for simplified data management.

## Conclusion

This project serves as a straightforward example of a REST API, showcasing fundamental backend principles while including essential features like CRUD routes, middleware, and error handling for effective user data management.

