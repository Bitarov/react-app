import React from 'react';
import { Link } from 'react-router-dom';
import './AsideLeft.css';


const TRANSPORTS = [
  {
    id: 'auto',
    title: 'МАШИНЫ',
  },
  {
    id: 'boat',
    title: 'КАТЕРА',
  },
  {
    id: 'aircraft',
    title: 'САМОЛЕТЫ',
  },
  {
    id: 'train',
    title: 'ПОЕЗДА',
  },
  {
    id: 'rocket',
    title: 'РАКЕТЫ',
  },
];

const Menu = () => (
  <div id="menu" className="aside-left__menu">
    <nav>
      <ul>
        {TRANSPORTS.map( ({ id, title }) =>
          <li key={id} className="page">
            <Link to={`/${id}`} data-transport={id}>{title}</Link>
          </li>
        )}
      </ul>
    </nav>
  </div>
);

const AsideLeft = () => (
  <div className="aside-left">
    <div className="aside-left__header">
      <a href="index.html" className="active"><img src="img/logo.png" alt="logo" />Apollo Docs</a>
    </div>
    <Menu />
  </div>
);

export default AsideLeft;