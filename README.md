# assessment-react-application

Web application using React and TypeScript

## Tech Stack

**FrontEnd:**

- ReactJs
- TypeScript
- HTML
- CSS
- SASS
- Bootstrap
- Bootstrap Icons
- React-router
- axios
- vite

**Testing:**

- vitest

## Installation and Setup Instructions

- Clone down this repository. You will need node and npm installed globally on your machine.
- Installation: run 'npm install'
- To Start Server: run 'npm run dev'
- To Visit App: : localhost:3000/

## Screen Shot(s)

Desktop Views

![Alt text](https://github.com/shelumeal/assessment-react-application/blob/main/screenshots/Desktop%20Screen%201.png)

![Alt text](https://github.com/shelumeal/assessment-react-application/blob/main/screenshots/Desktop%20Screen%202.png)

![Alt text](https://github.com/shelumeal/assessment-react-application/blob/main/screenshots/Desktop%20Screen%203.png)

![Alt text](https://github.com/shelumeal/assessment-react-application/blob/main/screenshots/Desktop%20Screen%204.png)

## Project Folder Structure

- Assets
  - images : Images & othet assets
- Common
  - helpers : Helper methods & Utility functions
  - hooks : Custom Hooks
    apiUrls : Maintain all api urls
    colors : Global color variables
- Components
  - SearchBar
  - SearchContainer
  - SearchResult
- Models : TypeScript interface/models
- Pages : Master Page
- Service : Service for API calls or search logic
- tests : test setup & test files for components & services.

## Assumptions

- Utilized Vite to build the React application for its fast development experience.
- Leveraged Bootstrap and Sass to implement responsive design.
- Developed a custom debounce hook to display suggestions and minimize multiple API calls.
