TodApp 
Overview
This project represents a minimal viable product (MVP) of a web-based project management application. Developed using React and its compiler Vite and Tailwind CSS for styling, the application enables users to efficiently create, manage, and track their projects and tasks. Additionally, HTML provides the foundation for the React + Vite web application to function properly and display content to users in the browser. Docker is also incorporated for containerization, ensuring seamless deployment and scalability across various environments.

Features
. Ability to add new tasks
. View the list of tasks
. Mark tasks as completed

Technologies Used
Html
Tailwind CSS
React
Vite (as the compiler)
Docker

Installation and Setup
1. clone the repository
   git clone https://github.com/your-username/project-management-app.git
2. navigate to the project directory
   cd TodoApp
3. Install dependencies:
   npm install

Running the Application Locally
To run the application locally, use the following command:

npm run dev

Dockerization
Building the Docker Image
Ensure Docker is installed on your system.
Build the Docker image using the provided Dockerfile:


Assumptions and Decisions
We chose React and Vite for their simplicity, performance, and scalability.
Docker was selected for containerization to facilitate easy deployment and scalability.
The application is kept lightweight to ensure smooth performance and deployment.

Resources

GitHub Repository: https://github.com/ndivine-eng/TodoApp

Docker Hub: https://hub.docker.com/repository/docker/nubuhorodivine/todo_application/general


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

