# Project Web App

## Front Technologies Used

- React
- Redux
- JavaScript
- Bootstrap

## Commands

After you download this project, these commands are available in `package.json`.

Make sure [NodeJS](https://www.nodejs.org/) or [Yarn](https://www.yarnpkg.com) is installed on your machine.

```bash
'yarn install' or 'npm install' to install dependencies # run the app in development mode
```

## Running the app

After installing dependencies,

```bash
$ npm start or yarn start
```

## Directory structure

### Overview

```tree
├─ src/
│  ├─ assets/
|  |  ├─css
|  |  ├-images
|  ├─ components/
|  ├─ routes/
|  |  ├─privateRoute.js
|  |  ├─routes.js
|  ├─ services/
|  |  ├─slices
|  |  ├──auth
|  |  ├───login
|  |  ├───register
|  |  ├──index
|  |  ├─history.js
|  |  ├─store.js
│  ├─ utils/
|  |  ├─apiUtils.js
|  |  ├-authUtils.js
|  |  ├-constants.js
│  ├─ pages/
|  |  ├─ Dashboard
|  |  ├─ auth
├─ package.json
├─ index.js
├─ App.js
└─ README.md
```

## Building the application

I created an env file locally to save constant e.g. backend url.
.env which uses ```bash
$ npm start - to test locally

````

To build the application:
```bash
$ npm run build
````

We can set up other build area based on preference.
