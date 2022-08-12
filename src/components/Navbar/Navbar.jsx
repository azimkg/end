import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { authContext } from "../../contexts/authContext";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  const NAVBAR_ROUTE = [
    { title: "Главная", link: "/", id: 1 },
    { title: "Все курсы", link: "/courses", id: 2 },
    { title: "О нас", link: "/about", id: 3 },
  ];
  function openBurger() {
    setOpen(true);
  }
  function closeBurger() {
    setOpen(false);
  }
  function out() {
    logout();
  }
  return (
    <div className="main_navbar">
      <div className="main_navbar-section container">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="main_navbar-three">
          {NAVBAR_ROUTE.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className={
                location.pathname === item.link
                  ? "navbar_route-active"
                  : "navbar_route"
              }
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="main_navbar-three">
          {user ? (
            <>
              <button className="navbar_auth" onClick={out}>
                Выйти
              </button>
              <span className="navbar__login">{user}</span>
            </>
          ) : (
            <Link className="navbar_auth" to="/auth">
              Войти
            </Link>
          )}
        </div>

        <div className="navbar_burger">
          {open === true ? (
            <span className="burger_close" onClick={closeBurger}>
              &#10006;
            </span>
          ) : (
            <div className="navbar_burger-menu" onClick={openBurger}>
              <span className="navbar_burger-menu-item"></span>
              <span className="navbar_burger-menu-item-1"></span>
              <span className="navbar_burger-menu-item"></span>
            </div>
          )}

          {open ? (
            <div className="navbar_burger-menu-select">
              <div className="navbar_burger-menu-select-items">
                {NAVBAR_ROUTE.map((item) => (
                  <Link
                    to={item.link}
                    key={item.id}
                    className={
                      location.pathname === item.link
                        ? "burger_items-active"
                        : "burger_items"
                    }
                  >
                    {item.title}
                  </Link>
                ))}
                {user ? (
                  <>
                    <p className="burger_items-auth " onClick={out}>
                      Выйти
                    </p>
                    <span className="burger_items-auth ">{user}</span>
                  </>
                ) : (
                  <Link className="burger_items-auth " to="/auth">
                    Войти
                  </Link>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
