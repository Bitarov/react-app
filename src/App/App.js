import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AsideLeft from '../components/AsideLeft/AsideLeft';
import Main from '../components/Main/Main';

const App = ({ children }) => (
  <div className="app">
    <AsideLeft />
    <Main>
      {children}
    </Main>
  </div>
)

export default App;
