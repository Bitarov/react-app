import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Transport from './components/Transport/Transport';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route path='/:id' component={Transport} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
