# Weather Dashboard
A responsive weather application built with HTML, CSS, and JS.
This project is a CI/CD demonstration using GitHub Actions.


![CI Pipeline](https://github.com/amashitharushika/weather-dashboard-devops-assignment/workflows/CI%20Pipeline/badge.svg)
![Deploy to Production](https://github.com/amashitharushika/weather-dashboard-devops/workflows/Deploy%20to%20Production/badge.svg)

## Group Information
* **Student 1:** R. Amashi Tharushika - ITBIN-2313-0086 - Role: DevOps Engineer
* **Student 2:** H. T. D. Rajapaksha - ITBIN-2313-0087 - Role: Full-Stack Developer

## Project Description
A responsive weather dashboard that allows users to search for cities and view current weather conditions along with a 5-day forecast. Integrated with OpenWeatherMap API.

## Live Deployment
**Live URL:**  https://weather-dashboard-devops-assignment.vercel.app/
## Technologies Used
* HTML5, CSS3, JavaScript
* GitHub Actions (CI/CD)
* Vercel (Cloud Deployment)
* OpenWeatherMap API

## Features
- **City Search:** Search for weather conditions in any city globally.
- **Current Weather:** View real-time temperature, humidity, and wind speed.
- **5-Day Forecast:** Get a prediction of weather conditions for the next 5 days.
- **Responsive Design:** Optimized for both desktop and mobile viewing.
- **Error Handling:** User-friendly alerts for invalid city names or network issues.

## Branch Strategy
We implemented the following branching strategy:
* `main` - Production branch (Protected, auto-deploys to Vercel)
* `develop` - Integration branch (Used for testing interactions between features)
* `feature/**` - Feature development branches

## Docker Containerised Version (Assignment 3)
This repository now includes:
 *Dockerfile (multi-stage build)
 *docker-compose.yml (service orchestration)
 *.dockerignore (build optimisation)
 *Secure environment variable management
 *The application runs inside a Node.js container using Express as the backend server.

## Prerequisites
Before running the containerised application, ensure you have:
 *Docker Desktop (Windows/Mac) or Docker Engine (Linux)
 *Docker Compose (included in Docker Desktop)
 *Node.js (version 18 or higher)
 *Git

**You can verify installation with:**
docker --version
docker-compose --version
Environment Variables

**This application requires an OpenWeatherMap API key.**
1. Create a .env file in the root directory:
2. OPENWEATHER_API_KEY=your_api_key_here

**Important:**
**Do NOT commit the .env file to GitHub.**
It is excluded using .gitignore and .dockerignore.

## Build and Run Instructions
**Option 1** – Using Docker Compose (Recommended)
- Build and start the container:
- docker-compose up --build
- Run in detached mode (background):
    docker-compose up -d --build

- the container:
    docker-compose down

**Option 2** – Using Docker Only
- Build the image:
- docker build -t weather-dashboard .
- Run the container:
    docker run -p 3000:3000 --env-file .env weather-dashboard
- Accessing the Application
- Once running, open:
http://localhost:3000

- To test the secure backend API route directly:
http://localhost:3000/api/weather?city=Colombo

## Docker Architecture Summary

* Base Image: node:18-alpine (lightweight and secure)
* Multi-stage build for image optimisation
* Non-root user for security
* Environment variables for secret management
* Bridge network for service isolation
* Restart policy enabled

## Security Measures Implemented
* API key externalised using environment variables
* .env excluded from Git tracking
* Container runs as non-root user
* Production dependencies only
* Alpine-based minimal image

## Troubleshooting
If Docker fails to start:
- Ensure Docker Desktop is running
- Restart Docker service
- Check logs:
docker-compose logs -f

If port 3000 is busy:
- Stop other services using the port
- Or change port mapping in docker-compose.yml

## Challenges Faced
**Securing Secrets in a Serverless Architecture**
One significant challenge was managing the OpenWeatherMap API key securely without a traditional backend. Initially, client-side requests exposed the API key to the browser. To resolve this security vulnerability, we engineered a serverless backend using **Vercel Serverless Functions**. We moved the API interaction logic to a secure server-side route (`api/weather.js`), allowing us to store the API key as a private Environment Variable on Vercel. This ensures the credentials are never exposed to the end-user.


## Individual Contributions
### ITBIN-2313-0086
* Repository initialization and branch protection rules.
* Implementation of CI pipeline (`ci.yml`) for automated testing.
* Configuration of Vercel deployment pipeline (`deploy.yml`).
* Management of pull requests and code reviews.
* Dockerfile implementation
* Multi-stage build configuration
* Docker Compose orchestration


### ITBIN-2313-0087
* Development of UI structure and responsive CSS.
* Implementation of API logic to fetch weather data.
* Documentation maintenance and conflict resolution.
* Create and manage feature branches.
* Express backend refactor
* Secure API route implementation
* Frontend integration

## Deployment Process
Our CI/CD pipeline is automated using GitHub Actions:

CI Pipeline (ci.yml): Triggered on pushes to develop and main. It installs dependencies, runs lint checks, and executes tests to ensure code integrity.

Deployment Pipeline (deploy.yml): Triggered only when changes are merged into the main branch. It automatically pushes the latest code to Vercel for production deployment.

## Build Status
See badges at the top of the document.

### Installation
```bash
# Clone the repository
git clone [https://github.com/amashitharushika/weather-dashboard-devops-assignment.git](https://github.com/amashitharushika/weather-dashboard-devops-assignment.git)

# Navigate to project directory
cd weather-dashboard-devops-assignment

# Install dependencies
npm install

# Run build command
npm run build


