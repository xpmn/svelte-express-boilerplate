# Svelte.js + Express.js Boilerplate

This is minimal svelte.js with express.js boilterplate

## Features

- Svelte preprocess + svelte plugin for VS Code support (svelte.config.js)
- Client app development with webpack-dev-server
- SASS support
- Example with global and local styles
- svg-inline-loader to put svg into code like `{@html importedSvg}`
- Example Express API
- Nodemon
- ESLint with some config
- Passing the ENV variables from `.svelte.env` to FE

## Installation

```bash
npx degit github:rewkha/svelte-express-boilerplate.git ./my-awesome-project
cd ./my-awesome-project
npm i
```

## Launch Development

```bash
npm run dev
```

## Launch Production

```bash
npm start
```
