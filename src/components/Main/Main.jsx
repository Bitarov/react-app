import React from 'react';

import './Main.css';

const Main = ({ children }) => (
  <div className="main">
    <header className="main__header">
      <input placeholder="Search Apollo Docs" />
    </header>
    <section className="main__section">
      <h1>Машины</h1>
      <hr/>
      <article className="main__article">
        <div id="data">
          {children}
        </div>
      </article>
      <div id="navigation">
        <h4>In this section</h4>
      </div>
    </section>
  </div>
)

export default Main;