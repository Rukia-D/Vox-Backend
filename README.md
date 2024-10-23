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
