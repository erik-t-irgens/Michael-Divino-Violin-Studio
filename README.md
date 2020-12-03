# Michael Divino Violin Studio Website

#### _This application is intended to provide Michael Divino with a violin studio solution to provide information, allow scheduling, and otherwise market for Michael's Violin Studio._

#### _By **Erik Irgens**_

## Description

This application is designed to accomplish the following, in short:

1. Create a website for Michael Divino's Violin Studio
2. Provide information for prospective and current student
3. Allow for current and prospective students to schedule lessons and appointments with Michael
4. Provide portals for students to submit payments.

## Component Tree Hierarchy

![Component Tree Diagram](/src/media/michael-divino-component-tree.svg)

### Component definitions:

1. HEADER - Navigation bar and Title section (MICHAEL DIVINO signature).
    * Navbar - Contains buttons and hamburger for navigational purposes
        * Hamburger - Appears when viewport is smaller than readable width of navbar (responsive), and can be toggled
        * Navbutton - Navigational buttons with section titles and router navigation.
        * Title - Michael's signature, appears when Hamburger is toggled off.
2. INDEX "/" - Contains main page content sections
    * ABOUT - Landing section with a portrait and introductory foreword.
        * MEDIA-BLOCK
        * SECTION
        * TITLE
    * THE STUDIO - 
    * MEDIA - Section that holds media of Michael and Studio's performances. 
        * MEDIA-BLOCK
        * SECTION
        * TITLE
    * PRICING - Contains pricing information about lessons
        * NOTIFIER - COVID-19 update information
        * SECTION
        * TITLE
        * PRICING TABLE - Table that compares prices between the two package types
            * MONTHLY - Monthly prices ($/lesson)
            * INDIVIDUAL - Individual session price ($/lesson)
    * CONTACT - Contact Michael Divino directly with inquiries
        * SECTION
        * TITLE
        * FORM
        * INPUT
3. SCHEDULE "/schedule" - Page dedicated to scheduling lessons via widget
    * 10to8 WIDGET - Fullpage interactable scheduling software handled through the 10to8 API.
4. RESOURCES "/resources" - Extra resources for students
    * LIST 
        * LIST ITEM - Title of the resourcs (Metronomes, local opportunities, local string replacements, repairs, shops, sheet music, etc.)
        * EXPANDABLE INFO - A modal that contains more information pertaining to LIST ITEM

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
