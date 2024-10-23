# Vox Backend

Vox is a public grievance portal designed to enable citizens to transparently submit, track, and resolve grievances while holding public officials accountable through a rating system. This repository contains the backend code for Vox, developed using Node.js, Express.js, and MongoDB.

## Key Features

1. **User Authentication and Authorization**
   - Vox provides secure user registration and login functionality using JWT (JSON Web Tokens) and bcrypt for password hashing.
   - Role-based access control (RBAC) is implemented for different types of users: citizens, officers, and admins. Each user can only access the features relevant to their role.
   - Forgot password functionality, where users can reset their password using a token sent to their registered email.

2. **Grievance Submission**
   - Citizens can submit grievances via a user-friendly form. Grievances are automatically assigned to an officer based on the citizen’s location and the type of issue.

3. **Officer Workflow**
   - Officers can view and manage grievances assigned to them. They can update the status or forward grievances to higher-ranking officers in the hierarchy.

4. **Email Notifications**
   - Citizens are kept informed with automated email notifications regarding the status of their grievances.
   - Citizens can send reminders to officers, limited to once every 7 days, to avoid spamming.

5. **Rating System**
   - After a grievance is resolved, citizens can rate the officer’s performance. This rating system promotes accountability by displaying aggregated ratings of officers.

6. **Admin Management**
   - Admins can manage officers within their city, overseeing grievance assignments and handling user-related operations.

## Technologies Used

- **Node.js & Express.js**: Core technologies for building a scalable backend server.
- **MongoDB**: A NoSQL database used for storing user accounts, grievances, and other platform-related data.
- **JWT**: Used for secure user session management and authentication.
- **Nodemailer**: Integrated for sending automated email notifications to users regarding grievance status updates.
- **Axios**: Used for efficient API handling between the backend and frontend.
- **bcrypt**: For hashing and securely storing user passwords.
- **dotenv**: Used for securing sensitive information with environment variables.

## API Endpoints

### Authentication Endpoints:
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Log in an existing user.
- `POST /api/auth/forgot-password` - Request password reset token.
- `POST /api/auth/reset-password` - Reset password using token.

### Grievance Endpoints:
- `POST /api/grievance` - Submit a new grievance.
- `GET /api/grievance/:id` - Get details of a specific grievance.
- `PUT /api/grievance/:id` - Update the status of a grievance.
- `POST /api/grievance/reminder/:id` - Send a reminder to the assigned officer.
- `POST /api/grievance/rate/:id` - Rate an officer after a grievance is resolved.

### Officer Management Endpoints:
- `GET /api/officer` - Get all officers in the city.
- `POST /api/officer` - Create a new officer.
- `PUT /api/officer/:id` - Update an officer's information.
- `DELETE /api/officer/:id` - Delete an officer.

### Admin Management Endpoints:
- `GET /api/admin` - Get all admins.
- `POST /api/admin` - Create a new admin.
- `PUT /api/admin/:id` - Update an admin's information.
- `DELETE /api/admin/:id` - Delete an admin.
