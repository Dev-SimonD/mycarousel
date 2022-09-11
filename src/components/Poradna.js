import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Man from "../assets/zamestnavatele.jpg";
import Couple from "../assets/zivotopis.jpg";
import Fun from "../assets/uspet.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/*  import "./App.css";
 */
// import required modules
import { Pagination } from "swiper";
import { Navigation } from "swiper";

export default function Poradna() {
  return (
    <div>
      <div
        /*  className="d-flex align-items-center container" */
        className="container poradnaMain"
        style={{
          justifyContent: "space-between",
          padding: "60px 30px 30px 30px",
        }}
      >
        <div>
          <h1 className="blueText">kariérní poradna</h1>
        </div>
        <div>
          <a href="#" style={{ fontSize: "24px", textDecoration: "none" }}>
            více článků
          </a>
        </div>
      </div>
      <div className="container flexShrink" style={{ flexShrink: "1" }}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          navigation={false}
          /* pagination={{
            clickable: true,
          }} */
          modules={[Pagination, Navigation]}
          className="mySwiper2"
          style={{ paddingBottom: "20px" }}
        >
          <SwiperSlide>
            <div className="test">
              <img
                src={Man}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                className="poradnaImage"
                style={{ borderRadius: "20px" }}
                alt="Smiling man sitting on stairs, having a phonecall. bookshelf in background"
              />
              <div className="container">
                <h4
                  className="text-start blueText pt-5"
                  style={{ color: "#6c738d" }}
                >
                  31 Srpen 2022
                </h4>

                <p style={{ fontSize: "20px" }} className="text-start blueText">
                  jak vybírají Češi zaměstnavatele a kdo je letos nejžádanější?
                </p>
                <div className="d-flex"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="test">
              <img
                src={Couple}
                className="poradnaImage"
                style={{ borderRadius: "20px" }}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                alt="Smiling man sitting on stairs, having a phonecall. bookshelf in background"
              />
              <div className="container">
                <h4
                  className="text-start blueText pt-5"
                  style={{ color: "#6c738d" }}
                >
                  26 Srpen 2022
                </h4>

                <p style={{ fontSize: "20px" }} className="text-start blueText">
                  jak napsat životopis?
                </p>
                <div className="d-flex"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="test">
              <img
                src={Fun}
                className="poradnaImage"
                style={{ borderRadius: "20px" }}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                alt="Smiling man sitting on stairs, having a phonecall. bookshelf in background"
              />
              <div className="container">
                <h4
                  className="text-start blueText pt-5"
                  style={{ color: "#6c738d" }}
                >
                  25 Srpen 2022
                </h4>

                <p style={{ fontSize: "20px" }} className="text-start blueText">
                  Jak uspět na video pohovoru?
                </p>
                <div className="d-flex"></div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
