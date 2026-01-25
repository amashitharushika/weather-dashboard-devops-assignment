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
**Live URL:** https://weather-dashboard-devops-assignment-beivujhno.vercel.app/

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

## Challenges
Securing Secrets in a Serverless Architecture One significant challenge we encountered was managing the OpenWeatherMap API key within a strictly frontend-only environment. Since client-side JavaScript is visible to the end-user, embedding the key directly exposes it to potential misuse. While we hardcoded the key for this demonstration to ensure immediate functionality without a backend, we recognize this is a security vulnerability. In a production DevOps environment, we would mitigate this by implementing a Node.js proxy server or using Vercel Serverless Functions to store the key as a server-side environment variable, keeping it completely hidden from the client browser.


## Individual Contributions
### ITBIN-2313-0086
* Repository initialization and branch protection rules.
* Implementation of CI pipeline (`ci.yml`) for automated testing.
* Configuration of Vercel deployment pipeline (`deploy.yml`).
* Management of pull requests and code reviews.

### ITBIN-2313-0087
* Development of UI structure and responsive CSS.
* Implementation of API logic to fetch weather data.
* Documentation maintenance and conflict resolution.
* Create and manage feature branches.

## Deployment Process
Our CI/CD pipeline is automated using GitHub Actions:

CI Pipeline (ci.yml): Triggered on pushes to develop and main. It installs dependencies, runs lint checks, and executes tests to ensure code integrity.

Deployment Pipeline (deploy.yml): Triggered only when changes are merged into the main branch. It automatically pushes the latest code to Vercel for production deployment.

## Setup Instructions

### Prerequisites
- Node.js (version 18 or higher)
- Git

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


