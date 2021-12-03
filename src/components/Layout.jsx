import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import routes from '../routes/routes.json';
import logo from '../assets/images/Asset 2.png';

import { styles } from '../assets';

const Layout = (props) => {
  const { children } = props;
  const history = useHistory();
  const location = useLocation();

  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('account')) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, [location.pathname]);

  return (
    <>
      <div className="center logo-travel">
        <img src={logo} alt="LOGO" width="200" height="200" />
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navigation"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p
                  className="navbar-brand link"
                  onClick={() => history.push(routes.home)}
                >
                  Travel
                </p>
              </li>
              <li className="nav-item">
                <p
                  className="nav-link link"
                  onClick={() => history.push(routes.flights)}
                >
                  Flights
                </p>
              </li>
              <li className="nav-item">
                <p
                  className="nav-link link"
                  onClick={() => history.push(routes.hotels)}
                >
                  Hotels
                </p>
              </li>
              <li className="nav-item">
                <p
                  className="nav-link link"
                  onClick={() => history.push(routes.disney)}
                >
                  Disney
                </p>
              </li>
              {logged ? (
                <li className="nav-item">
                  <p
                    className="nav-link link"
                    onClick={() => history.push(routes.account)}
                  >
                    Account
                  </p>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <p
                      className="nav-link link"
                      onClick={() => history.push(routes.login)}
                    >
                      Log in
                    </p>
                  </li>
                  <li className="nav-item">
                    <p
                      className="nav-link link"
                      onClick={() => history.push(routes.signup)}
                    >
                      Sign Up
                    </p>
                  </li>
                </>
              )}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>Holy guacamole!</strong> You should log in for better offers.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div> */}
      <div className="content-container">{children}</div>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <p href="#" className="nav-link px-2 text-muted">
                Home
              </p>
            </li>

            <li className="nav-item">
              <p href="#" className="nav-link px-2 text-muted">
                Contact
              </p>
            </li>
            <li className="nav-item">
              <p href="#" className="nav-link px-2 text-muted">
                Policy
              </p>
            </li>
            <li className="nav-item">
              <p href="#" className="nav-link px-2 text-muted">
                About
              </p>
            </li>
          </ul>
          <p className="text-center text-muted">
            &copy; 2021 Sun kissed Travels, Inc
          </p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
