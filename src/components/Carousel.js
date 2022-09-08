/* import React, { useRef, useState } from "react";
 */ // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Man from "../assets/man.jpg";
import Couple from "../assets/couple.jpg";
import Fun from "../assets/fun.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/*  import "./App.css";
 */
// import required modules
import { Pagination } from "swiper";
import { Navigation } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img
              src={Man}
              alt="Smiling man sitting on stairs, having a phonecall. bookshelf in background"
            />
            <div className="container">
              <h4 className="text-start blueText pt-5">Randstad News</h4>
              <h2 className="text-start blueText py-3">
                nezaměstnanost v červenci vzrostla na 3,3%
              </h2>
              <p className="text-start blueText">
                Jedním z důvodů může být pozastavení či protahování náborových
                procesů z důvodu dovolených. Kandidáti na trhu práce ale stále
                chybí.
              </p>
              <div className="d-flex">
                <button
                  type="button"
                  class="btn p-3 btn-outline-primary blueBtn"
                >
                  Prectete si vice
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={Couple}
              alt="Smiling man sitting on stairs, having a phonecall. bookshelf in background"
            />
            <div className="container">
              <h4 className="text-start blueText pt-5">Pruzkum REBR</h4>
              <h2 className="text-start blueText py-3">
                Čechům záleží na příjemné pracovní atmosféře více než před 5
                lety
              </h2>
              <p className="text-start blueText">
                V našem průzkumu Randstad Employer Brand Research jsme letos již
                popáté porovnávali faktory, které ovlivňují pracovníky při
                výběru zaměstnavatele.
              </p>
              <div className="d-flex">
                <button
                  type="button"
                  style={{ marginTop: "30px" }}
                  class="btn p-3 btn-outline-primary blueBtn"
                >
                  Prectete si vice
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={Fun}
              alt="Smiling man sitting on stairs, having a phonecall. bookshelf in background"
            />
            <div className="container">
              <h4 className="text-start blueText pt-5">Randstad Workmonitor</h4>
              <h2 className="text-start blueText py-3">
                tři pětiny Čechů jsou otevřeny změně práce
              </h2>
              <p className="text-start blueText">
                V porovnání s loňským rokem přibylo v Česku zaměstnanců, kteří
                zvažují změnu místa. Podívejte se na nejčastější důvody, které
                je k tomu vedou.
              </p>
              <div className="d-flex">
                <button
                  type="button"
                  class="btn p-3 btn-outline-primary blueBtn"
                >
                  Prectete si vice
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
