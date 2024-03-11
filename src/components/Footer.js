import React from "react";
import companyData from "../data/Company";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to={"/"} className="nav-link px-2 text-muted">
              Ana səhifə
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/"} className="nav-link px-2 text-muted">
              Layihə haqda
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/"} className="nav-link px-2 text-muted">
              İstifadəçi razılaşması
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/"} className="nav-link px-2 text-muted">
              Saytın xəritəsi
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/"} className="nav-link px-2 text-muted">
              Məxfilik siyasəti
            </Link>
          </li>
        </ul>
        <p className="text-center text-muted">
          &copy; {new Date().getFullYear()} {companyData[0].company} | Bütün
          hüquqlar qorunur
        </p>
      </footer>
    </div>
  );
};

export default Footer;
