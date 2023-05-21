import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { GiConcentrationOrb } from "react-icons/gi";
import { useNavigate, Link } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";
const Navbar: React.FC = () => {
  const naviagte = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let Authenticate_Status = localStorage.getItem("Authenticated");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  function handleClick() {
    localStorage.removeItem("Authenticated");
    naviagte("/");
  }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-button">
          <Link to={"/home"}>Home</Link>
        </button>
        {Authenticate_Status == "Yes" ? (
          ""
        ) : (
          <button className="navbar-button">
            <Link to={"/"}>Login</Link>
          </button>
        )}

        <button className="navbar-menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
            <GiConcentrationOrb className="icon" />
          ) : (
            <RxHamburgerMenu className="icon" />
          )}
        </button>
        {Authenticate_Status == "Yes" ? (
          <button onClick={handleClick} className="logout-button">
            Logout
          </button>
        ) : (
          ""
        )}
      </div>
      {isMenuOpen && (
        <div className="navbar-dropdown">
          <Button
            size="xs"
            colorScheme="var(--accent)"
            className="res-navbar-button"
          >
            <Link to={"/home"}>Home</Link>
          </Button>
          {Authenticate_Status == "Yes" ? (
            ""
          ) : (
            <Button
              size="xs"
              colorScheme="var(--accent)"
              className="res-navbar-button"
            >
              <Link to={"/"}>Login</Link>
            </Button>
          )}

          {Authenticate_Status == "Yes" ? (
            <Button
              size="xs"
              onClick={handleClick}
              colorScheme="var(--accent)"
              className="res-logout-button"
            >
              Logout
            </Button>
          ) : (
            ""
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
