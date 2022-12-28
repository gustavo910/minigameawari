import Cards from 'Cards';
import Config from 'pages/Config';
import Home from 'pages/Home';
import React from 'react';
import { BrowserRouter as Router, Routes as CustomRoutes, Route } from 'react-router-dom';

function Routes() {
  return (
    <Router>
      <CustomRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/config" element={<Config />} />
      </CustomRoutes>
    </Router>
  );
}

export default Routes;
