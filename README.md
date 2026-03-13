# Student Registration Page

A full-stack student registration web application built with:

- **Backend**: .NET 8 Web API + Entity Framework Core + SQLite
- **Frontend**: Angular 19 (standalone components, reactive forms)

## Features

- Landing page registration form with fields: First Name, Last Name, Email, Phone, Date of Birth, Course, and Address
- Client-side validation with error messages
- Successful registration confirmation page displaying submitted details
- Data persisted to a local SQLite database via a RESTful API

## Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js 18+](https://nodejs.org/)
- Angular CLI: `npm install -g @angular/cli`

## Getting Started

### 1. Run the Backend API

```bash
cd StudentRegistrationAPI
dotnet run
```

The API will be available at `http://localhost:5000`.

**Endpoints:**
| Method | URL | Description |
|--------|-----|-------------|
| `POST` | `/api/students` | Register a new student |
| `GET`  | `/api/students` | List all registered students |
| `GET`  | `/api/students/{id}` | Get a student by ID |

### 2. Run the Angular Frontend

```bash
cd student-registration-frontend
npm install
ng serve
```

Open your browser at `http://localhost:4200`.

## Project Structure

```
student-registration-page/
├── StudentRegistrationAPI/          # .NET 8 Web API backend
│   ├── Controllers/
│   │   └── StudentsController.cs   # REST endpoints
│   ├── Data/
│   │   └── AppDbContext.cs         # EF Core database context
│   ├── Models/
│   │   └── Student.cs              # Student entity model
│   ├── Program.cs                  # App configuration & startup
│   └── appsettings.json            # Connection string config
│
└── student-registration-frontend/  # Angular frontend
    └── src/app/
        ├── components/
        │   ├── registration-form/  # Landing page form
        │   └── success/            # Success confirmation page
        ├── services/
        │   └── student.ts          # HTTP service for API calls
        ├── app.routes.ts           # Client-side routing
        └── app.config.ts           # App providers (HttpClient, Router)
```

## Database

SQLite is used for local development. The database file (`students.db`) is created automatically in the `StudentRegistrationAPI` directory on first run. No additional database setup is required.
