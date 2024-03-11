import React from "react";
import { Link } from "react-router-dom";
import companyData from "../data/Company";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to={"/"} className="navbar-brand text-capitalize">
            {companyData[0].name}
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link" aria-current="page">
                  Alqı-satqı
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Kirayə
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Agentliklər
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Yaşayış Kompleksləri
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center">
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
              <a href="#" className="btn btn-success mx-3">
                <i class="fa-solid fa-plus me-1"></i> Elan yerləşdir
              </a>
              <ul className="list-unstyled mb-0">
                <li className="nav-item dropdown text-decoration-none ms-2">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="rounded-circle"
                      height="25"
                      alt="Black and White Portrait of a Man"
                      loading="lazy"
                    />
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
