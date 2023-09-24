import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";

import img1 from "../../img/slide1.jpg";
import img2 from "../../img/slide2.jpg";
import img3 from "../../img/slide3.jpg";
import img4 from "../../img/slide4.jpg";
import afire from "../../img/afire.mp4";

const Slide = ({ data, handleRen }) => {
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);

  const openVideoPopup = () => {
    setIsVideoPopupOpen(true);
  };

  const closeVideoPopup = () => {
    setIsVideoPopupOpen(false);
  };

  // 슬라이더 설정
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-film"
              viewBox="0 0 16 16"
            >
              <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
            </svg>
            &nbsp; MOVIE CHART
          </a>
          <form className="d-flex" role="search">
            <a href="http://localhost:3001/login">
              <button className="btn btn-outline-danger" type="button">
                로그인
              </button>
            </a>
          </form>
        </div>
      </nav>

      <Slider {...settings}>
        <div className="img1">
          <img src={img1} alt="" onClick={openVideoPopup} />
        </div>
        <div className="img2">
          <img src={img2} alt="" onClick={openVideoPopup} />
        </div>
        <div className="img3">
          <img src={img3} alt="" onClick={openVideoPopup} />
        </div>
        <div className="img4">
          <img src={img4} alt="" onClick={openVideoPopup} />
        </div>
      </Slider>

      {isVideoPopupOpen && (
        <div className="videoPopup">
          <div className="videoContent">
            <button className="close" onClick={closeVideoPopup}>
              X
            </button>
            <video controls autoPlay>
              <source src={afire} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slide;
