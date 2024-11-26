import React from "react";
import { LINKS, LINKS_RIGTH } from "../../static";
import Logo from "../../assets/Logo.png";
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="container-lg">
        <nav className="navbar">
          {/* //navbar right */}
          <ul className="navbar__list left">
            {LINKS.map((item) => (
              <li key={item.id} className="navbar__item">
                <a href={item.link} className="navbar__link">
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
          {/* logo */}
          <div className="navbar__logo">
            <img src={Logo} alt="logo" />
          </div>
          {/* navbar right */}
          <ul className="navbar__list right">
            {LINKS_RIGTH.map((item) => (
              <li key={item.id} className="navbar__item">
                <a href={item.link} className="navbar__link">
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
