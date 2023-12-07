import React from 'react';
import {NavLink} from 'react-router-dom';

const Toolbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">Static Pages</span>
        <ul className="navbar-nav mr-auto flex-row gap-2 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pages/About" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pages/Contacts" className="nav-link">Contacts</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pages/Divisions" className="nav-link">Divisions</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pages/admin" className="nav-link">Admin</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Toolbar;

