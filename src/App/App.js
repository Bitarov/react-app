import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AsideLeft from '../components/AsideLeft/AsideLeft';

const App = ({ children }) => (
  <div className="app">
    <AsideLeft />
    {/* {children} */}
  </div>
)

export default App;
