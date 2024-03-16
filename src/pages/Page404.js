import React from "react";
import image from "../data/Images";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center page404">
            <img
              src={image.error_404}
              alt="error_images"
              style={{ width: "570px" }}
            />
            <div className="ms-2 mt-md-3">
              <h1 className="fs-1">Oops, Məlumat Tapılmadı</h1>
              <p className="text-muted fs-5">
                Biz axtardığınız səhifəni tapa bilmirik. Əvvəlki səhifəyə
                qayıtmağa çalışın və ya əlavə məlumat üçün bizimlə əlaqə
                saxlayın
              </p>
              <Link to={"/"} className="btn btn-success mt-3 me-2">
                Geri Qayıt
              </Link>
              <Link to={"/about"} className="btn btn-secondary mt-3">
                Əlaqə
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page404;
