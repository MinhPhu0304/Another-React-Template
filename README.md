# Boilerplate for starting a new site fast with Create React app + Redux and React Router Dom

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What is different from  Create React App?
- Added Redux store for state management
- Added navigation to different pages
- The boilerplate is configured that every navigation to another page will trigger an action to Redux store

## Folder structure

    ├── README.md
    ├── node_modules
    ├── package.json
    ├── .gitignore
    ├── jsconfig.json              # Setting JS complier otpions for vs code
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   └── manifest.json
    └── src
        ├── pages/                 # Page folder
        ├── atoms/                 # Other small comopnents
        ├── App.js
        ├── store/                 # Redux logic
        │   ├── actions/           # Action creators
        │   ├── history/           # Navigation listener
        │   ├── reducers/          # Reducer functions
        │   └── index.js           # store export
        ├── index.js
        └── serviceWorker.js
    
## Available Scripts

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
Don't do this kids. This is a one way to hell