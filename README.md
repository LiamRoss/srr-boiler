# React-Redux Boilerplate (JavaScript)

A React and Redux boilerplate with hot reloading, SASS compiling and provides a clean starting point for building applications.

For the TypeScript version check out [tsrr-boiler.](https://github.com/LiamRoss/tsrr-boiler.git)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need node, and either npm or yarn installed for managing packages.

Check if they are installed by entering the following in console:
```
$node -v
$npm -v
$yarn -v
```

### Installing

Clone the repository to your local machine

```
git clone https://github.com/LiamRoss/srr-boiler.git
```

Finally, run your preferred package installer
#### `npm start` or `yarn start`

This will install your package.json dependencies, and your project will be ready to build!

## Scripts

The scripts section is borrowed and revised from Facebook's [create-react-app](https://github.com/facebookincubator/create-react-app#npm-start-or-yarn-start) page.

#### `npm start` or `yarn start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

*You will see the build errors and lint warnings in the console.*

#### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.
By default, runs tests related to files changed since the last commit.

Jest will look for test files with any of the following popular naming conventions:

* Files with `.js` suffix in `__tests__` folders.
* Files with `.test.js` suffix.
* Files with `.spec.js` suffix.
* Any of the above with jsx in place of js

*[Read more about testing.](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)*

## Deployment

Deployment will generate a minified build within your project folder. This build is exluded from git.

#### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
By default, it also [includes a service worker](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app) so that your app loads from local cache on future visits.

## Main Components

* [create-react-app](https://github.com/facebookincubator/create-react-app) - The starting point for building this boilerplate
* [Webpack 2](https://webpack.js.org/) - For building and bundling
* [Jest](https://facebook.github.io/jest/) - The testing framework

## Authors

* **Liam Ross**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GitHub - [LiamRoss](https://github.com/LiamRoss)
    * Initialized boilerplate

