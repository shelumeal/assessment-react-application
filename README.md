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

1) Landing Page

![Alt text](https://github.com/shelumeal/assessment-react-application/blob/main/screenshots/Screen%201.png)

2) User focuses on the search box and typing.
   Suggestions will appear only after typing more than 2 characters and pausing for 1 second

![Alt text](https://github.com/shelumeal/assessment-react-application/blob/main/screenshots/Screen%202.png)

3) Display sugesstion list

![Alt text](https://github.com/shelumeal/assessment-react-application/blob/main/screenshots/Screen%203.png)

3) Select a suggestion

![Alt text](https://github.com/shelumeal/assessment-react-application/blob/main/screenshots/Screen%204.png)

4) Display search results

![Alt text](https://github.com/shelumeal/assessment-react-application/blob/main/screenshots/Screen%205.png)

5) Display error message in case of network failure
   
![Alt text](https://github.com/shelumeal/assessment-react-application/blob/main/screenshots/Screen%207.png)


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
