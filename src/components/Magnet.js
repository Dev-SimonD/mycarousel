import React, { useEffect } from "react";
import magnetIcon from "../assets/magnet.png";
import Aos from "aos";

export default function Magnet() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      style={{ backgroundColor: "#ffb511" }}
    >
      <div className="container magnetMain" style={{ paddingInline: "20px" }}>
        <div className="d-flex">
          <img id="magnetIcon" src={magnetIcon} style={{ padding: "50px" }} />
        </div>

        <div>
          <h4 style={{ color: "#0f1941" }}>Randstad Employer Brand Research</h4>
          <h1 style={{ color: "#0f1941" }}>výsledky 2022.</h1>
          <p
            style={{
              color: "#0f1941",
              lineHeight: "30px",
              fontSize: "18px",
              letterSpacing: "0",
            }}
          >
            Zajímá vás, kdo se letos stal nejatraktivnějším zaměstnavatelem a
            získal prestižní ocenění Randstad Award? Chtěli byste vědět, co
            zaměstnance nejvíce motivuje, a co je pro ně důležité při výběru
            zaměstnavatele? Podívejte se na výsledky našeho průzkumu Employer
            Brand Research!
          </p>
          <button
            style={{ padding: "20px" }}
            className="btn btn-outline-primary mb-5 blueBtn"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            výsledky REBR 2022
          </button>
        </div>
      </div>
    </div>
  );
}
