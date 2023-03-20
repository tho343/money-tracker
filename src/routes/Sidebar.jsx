import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Sidebar() {
  return (
    <Fragment>
      <div className='sidebar-container'>
        <img src={logo}></img>

        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            home
          </Link>
          <Link className="nav-link" to="/income">
            income
          </Link>
          <Link className="nav-link" to="/expenses">
            expenses
          </Link>
        </div>

      </div>
      <Outlet />
    </Fragment>

  )
}
