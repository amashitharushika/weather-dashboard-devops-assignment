# Weather Dashboard - DevOps Assignment

A modern, responsive weather application built with HTML, CSS, and JavaScript, demonstrating complete CI/CD pipeline implementation.

![CI Pipeline](https://github.com/amashitharushika/weather-dashboard-devops-assignment/workflows/CI%20Pipeline/badge.svg)
![Deploy to Production](https://github.com/amashitharushika/weather-dashboard-devops-assignment/workflows/Deploy%20to%20Production/badge.svg)

## Group Information
* **Student 1:** R. Amashi Tharushika - ITBIN-2313-0086 - Role: DevOps Engineer
* **Student 2:** H. T. D. Rajapaksha - ITBIN-2313-0087 - Role: Full-Stack Developer

## Project Description
A responsive weather dashboard that allows users to search for cities worldwide and view current weather conditions along with a 5-day forecast. Features secure API integration with OpenWeatherMap and containerized deployment.

## Live Deployment
**Live URL:** https://weather-dashboard-devops-assignment.vercel.app/

## Technologies Used
* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Backend:** Node.js with Express.js
* **DevOps:** GitHub Actions (CI/CD), Docker, Docker Compose
* **Deployment:** Vercel (Cloud Platform)
* **API:** OpenWeatherMap API
* **Security:** Environment Variables, Non-root Container User

## Features
- **City Search:** Search for weather conditions in any city globally
- **Current Weather:** Real-time temperature, humidity, wind speed, and weather conditions
- **5-Day Forecast:** Detailed weather predictions for the next 5 days
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices
- **Error Handling:** User-friendly alerts for invalid inputs or network issues
- **Secure API:** Server-side API key management (hidden from client)
- **Containerized:** Docker support for consistent deployment

## Branch Strategy
 Implemented Git Flow branching strategy:
* `main` - Production branch (Protected, auto-deploys to Vercel)
* `develop` - Integration branch for testing feature interactions
* `feature/**` - Individual feature development branches
* `fix/**` - Bug fixes and patches
* `docs/**` - Documentation updates

## Project Structure
```
weather-dashboard-devops-assignment/
├── api/
│   └── weather.js          # Vercel serverless API function
├── src/
│   ├── index.html          # Main HTML page
│   ├── assets/             # Images and static assets
│   ├── scripts/
│   │   ├── api.js          # Frontend API calls
│   │   └── app.js          # Main application logic
│   └── styles/
│       └── style.css       # Application styling
├── Dockerfile              # Multi-stage Docker build
├── docker-compose.yml      # Container orchestration
├── vercel.json            # Vercel deployment configuration
├── server.js              # Express server for local development
├── package.json           # Node.js dependencies
└── README.md              # This file
```

## Docker Containerization
This repository includes complete containerization:
* **Dockerfile:** Multi-stage build for optimized image size
* **docker-compose.yml:** Service orchestration with networking
* **.dockerignore:** Build optimization (excludes unnecessary files)
* **Security:** Non-root user, environment variable management

## Prerequisites
Before running the application, ensure you have:
* **Docker Desktop** (Windows/Mac) or **Docker Engine** (Linux)
* **Docker Compose** (included with Docker Desktop)
* **Node.js** (version 18 or higher) - for local development
* **Git** - for cloning the repository

**Verify installations:**
```bash
docker --version
docker-compose --version
node --version
npm --version
```

## Environment Setup
This application requires an OpenWeatherMap API key.

1. **Get API Key:** Sign up at [OpenWeatherMap](https://openweathermap.org/api) and get your free API key
2. **Create environment file:**
   ```bash
   # Create .env file in project root
   echo "OPENWEATHER_API_KEY=your_api_key_here" > .env
   ```

**⚠️ Important Security Notes:**
* **NEVER commit `.env` file to GitHub**
* The `.env` file is excluded via `.gitignore` and `.dockerignore`
* For Vercel deployment: Set `OPENWEATHER_API_KEY` in Vercel project environment variables

## Build and Run Instructions

### Option 1: Docker Compose (Recommended)
```bash
# Build and start the container
docker-compose up --build

# Run in background (detached mode)
docker-compose up -d --build

# Stop the container
docker-compose down
```

### Option 2: Docker Only
```bash
# Build the image
docker build -t weather-dashboard .

# Run the container
docker run -p 3000:3000 --env-file .env weather-dashboard
```

### Option 3: Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Or run production server
npm start
```

## 🌐 Accessing the Application
Once running, open your browser to:
**http://localhost:3000**

**Test the API directly:**
**http://localhost:3000/api/weather?city=Colombo**

## Docker Architecture Summary
* **Base Image:** `node:18-alpine` (lightweight and secure)
* **Multi-stage Build:** Separate build and production stages
* **Security:** Non-root user (`appuser`) for container execution
* **Networking:** Bridge network for service isolation
* **Restart Policy:** `unless-stopped` for reliability
* **Environment:** Secure API key management via environment variables

## Security Measures Implemented
* API key externalized using environment variables
* `.env` file excluded from Git tracking
* Container runs as non-root user
* Production dependencies only (no dev dependencies in container)
* Server-side API calls (API key never exposed to client)
* Input validation and error handling

## Contributing
1. Create a feature branch from `develop`
2. Make your changes and test thoroughly
3. Create a pull request to `develop`
4. After review, merge to `main` for production deployment


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


