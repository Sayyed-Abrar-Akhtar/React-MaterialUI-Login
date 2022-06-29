# Awesome authentication project

The project has some setup but still requires some efforts to make it awesome. Therefore, we need someone to help us to make it production ready.

Note: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Returning your solution

- [Made a copy of this repository in my GitHub account] (https://github.com/Sayyed-Abrar-Akhtar/React-MaterialUI-Login/).
- Added Login and Sign up design with MaterialUI components and developed functionality to perform login and signup"
- [Project GitHub Repo:](https://github.com/Sayyed-Abrar-Akhtar/React-MaterialUI-Login).
- [Project Live URL:](https://react-material-ui-login.vercel.app/).

## Prerequisite

- To help you, all the necessary packages are already specified in the package.json
- Run app locally in development mode using `yarn && yarn start`.
- Launch the test runner in the interactive watch mode using `yarn test`.
- Build the app for production to the build folder using `yarn build`.

## Exercises

## Attempting all the questions is not a must however, your efforts will be rewarded. Note:- Exercise 1, 2 and 3 are mandatory.

Hints: Use material design for the [ui](https://material-ui.com/) and feel free to use your own ideas for the design.

### [1] Create register form for user account creation

- The form includes Email, password and confirm password fields.
- The form fields are validated for email (must be a valid email) and, password (must be at least 8 characters long and include at least a number and an alphabet) and also match with confirm password field.
- Shown success message on registration success and navigate user to login page using **useHistory** hooks
- Stored user credentials in browser local storage

### [2] Build login form so that user can login using the credentials from exercise [1].

- Added email and password field in the login form with field validations.
- On successful login the user will be greeted with welcome message and navigated to the authenticated page.
- The authenticated page made not to be accessible if the user is not logged in.

### [3] Deployed to Vercel

- Deployed application to Vercel [link](https://react-material-ui-login.vercel.app/)

### [4] Testing

- Written unit test for rendering Login Page and Sign Up Page
- Written unit test for login and sign up functionality

### [5] Documentation

#### Description

- Designed a simple sign up and login system using MaterialUI.
- Developed functionality using the local storage.

#### Installation

- Download or clone the repository.
- Extract files if downloaded.
- In the terminal navigate to the app folder where package.json file exists.
- run **npm install** to install the dependencies
- run **npm start** to run the application locally
- To build the react app run **npm run build**

#### General Information

- In order to perform the sign up and login, the app uses local storage to store user data.
- **App do not perform any password encryption and can be easily retrieved from local storage**

### [6] Docker

- Make the app run in the docker
