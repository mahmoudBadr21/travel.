import React, { useState } from "react";
import "./navBar.css";
import OutsideClickHandler from 'react-outside-click-handler'

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const getMenuStyle = (menuOpen) => {
    if (document.documentElement.clientWidth <= 768) {
      return {right: !menuOpen && "-100%"}
    }
  }

  return (
    <section className="navBar container">
      <header className="navBar-header flex">
        <div className="navBar-logo">
          <a href="#">
            <h1>
              <i className="fa-brands fa-slack"></i> <span>Travel.</span>
            </h1>
          </a>
        </div>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpen(false)
          }}
        >
          <div className="navBar-links flex" style={getMenuStyle(menuOpen)}>
            <div className="close-icon" onClick={() => setMenuOpen(false)}>
              <i className="fa-solid fa-close close-menu"></i>
            </div>
            
            <li className="navBar-list-item">
              <a href="" className="navBar-item-link">
                Home
              </a>
            </li>

            <li className="navBar-list-item">
              <a href="" className="navBar-item-link">
                Packages
              </a>
            </li>

            <li className="navBar-list-item">
              <a href="" className="navBar-item-link">
                Shop
              </a>
            </li>

            <li className="navBar-list-item">
              <a href="" className="navBar-item-link">
                About
              </a>
            </li>

            <li className="navBar-list-item">
              <a href="" className="navBar-item-link">
                Pages
              </a>
            </li>

            <li className="navBar-list-item">
              <a href="" className="navBar-item-link">
                News
              </a>
            </li>

            <li className="navBar-list-item">
              <a href="" className="navBar-item-link">
                Contact
              </a>
            </li>

            <li className="navBar-list-item">
              <button className="btn">
                <a href="" className="navBar-item-link">
                  BOOK NOW
                </a>
              </button>
            </li>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => {setMenuOpen(true)}}>
          <i className="fa-solid fa-bars-staggered toggel-menu"></i>
        </div>

      </header>
    </section>
  );
};

export default NavBar;
