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

## Branch Strategy
We implemented the following branching strategy:
* `main` - Production branch (Protected)
* `develop` - Integration branch
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
