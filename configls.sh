#!/bin/bash

#  build app
npm run build

# Docker login
docker login

# Build Docker image
docker build -t vite-react-app:latest .

# Run Docker container 
# docker run -p 8080:8080 vite-react-app:latest

# Tag Docker image
docker tag vite-react-app:latest nubuhorodivine/todo_application:latest

# Push Docker image to Docker Hub
docker push nubuhorodivine/todo_application:latest

# Pull Docker image from Docker Hub
docker pull nubuhorodivine/todo_application:latest

# Run Docker container with pulled image
docker run -p 8080:8080 nubuhorodivine/todo_application:latest
# By Chriss Copy My Code At Your Own Risk