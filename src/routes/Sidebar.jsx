import React, { Fragment, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../assets/logo.svg';

export default function Sidebar() {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const toggleNav = (navBtn) => {
    setShowNavMenu(!navBtn);
  }
  return (
    <Fragment>
      <div className='sidebar-container'>
        <div className="sidebar-header">
          <Link to="/" >
            <img src={logo} alt="logo with two circles"></img>
          </Link>

          <GiHamburgerMenu className='toggle-btn' size={30} onClick={() => toggleNav(showNavMenu)} />
        </div>

        <div className={showNavMenu ? "nav-links-container show-links" : "nav-links-container"}>
          <Link onClick={() => setShowNavMenu(false)} className="nav-link" to="/" >
            home
          </Link>
          <Link onClick={() => setShowNavMenu(false)} className="nav-link" to="/income">
            income
          </Link>
          <Link onClick={() => setShowNavMenu(false)} className="nav-link" to="/expenses">
            expenses
          </Link>
        </div>


      </div>
      <Outlet />
    </Fragment>

  )
}
