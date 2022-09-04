import React from "react";

function Footer() {
  return (
    <div>
      {/* <!-- Footer --> */}
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#929fba" }}
      >
        {/* <!-- Grid container --> */}
        <div className="container p-4 pb-0">
          {/* <!-- Section: Links --> */}
          <section className="">
            {/* <!--Grid row--> */}
            <div className="row">
              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-4 ">
                <h6 className="text-uppercase mb-4 font-weight-bold">About</h6>
                <p>I am a software developer in Accenture Solutions.</p>
              </div>
              {/* <!-- Grid column --> */}

              <hr className="w-100 clearfix d-md-none" />

              {/* <!-- Grid column --> */}
              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-4 ">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <i className="fas fa-home mr-3"></i> Sikandra Rao,
                  Hathras,U.P. India
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i>{" "}
                  malpani.shubham23@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> +918506868608
                </p>
              </div>

              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-4">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Follow us
                </h6>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#ac2bac" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                {/* <!-- Linkedin --> */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#0082ca" }}
                  href="https://www.linkedin.com/in/shubham-malpani-a90bbb15b/"
                  role="button"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                {/* <!-- Github --> */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#333333" }}
                  href="https://github.com/Shub9319"
                  role="button"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright: Shubham Malpani
        </div>
      </footer>
    </div>
  );
}

export default Footer;
