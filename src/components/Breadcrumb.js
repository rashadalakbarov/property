import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ current }) => {
  return (
    <div className="row">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={"/"} className="text-decoration-none text-black">
              <i className="fa-solid fa-house me-2"></i>
              Ana səhifə
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {current}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
