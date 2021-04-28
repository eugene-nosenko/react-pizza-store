## How to start

```bash
yarn start
yarn server
```

## Netlify

https://react-pizza-store.netlify.app/

## Update to React 17 and Webpack 5

```bash
nvm list
yarn upgrade-interactive --latest
yarn add webpack@next
npm rebuild node-sass
```

## Redux

https://github.com/rajdee/redux-in-russian

## Provider

https://redux.js.org/tutorials/fundamentals/part-5-ui-react#passing-the-store-with-provider

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

ReactDOM.render(
  // Render a `<Provider>` around the entire `<App>`,
  // and pass the Redux store to as a prop
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

### Redux Hooks

https://react-redux.js.org/api/hooks

### Redux DevTools

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
https://github.com/reduxjs/redux-devtools

```bash
yarn remove @testing-library/jest-dom @testing-library/react @testing-library/user-event
yarn add -D @testing-library/jest-dom @testing-library/react @testing-library/user-event

yarn add -D eslint
./node_modules/.bin/eslint --init
```

### JSON Server Hooks

https://github.com/typicode/json-server
yarn add -D json-server

npx json-server --watch public/db.json
http://localhost:3000/pizzas?\_order=desc&\_sort=price

### Pizzas

```
https://dominos.ua/uk/odessa/
https://www.dominos.com.au/menu
https://tonyvespa.co.il/
https://papajohns.co.il/
https://www.papajohns.es/
```
