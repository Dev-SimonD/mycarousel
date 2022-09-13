import React from "react";
import rovnostImage from "../assets/rovnost.jpg";

const Rovnost = (props) => {
  return (
    <div
      className="rovnostMain"
      data-aos="fade-up"
      style={{ backgroundColor: "#f7f5f0" }}
      data-aos-once="true"
    >
      <div>
        <img
          style={{
            height: "200px",
            objectFit: "cover",
            width: "100%",
            marginTop: "50px",
          }}
          className="rovnostImg"
          src={rovnostImage}
        />
      </div>
      <div className="rovnostText">
        <h4 style={{ color: "#0f1941", marginTop: "50px" }}>
          rovnost, diverzita, inkluze a sounáležitost v randstadu,
        </h4>
        <h1 style={{ color: "#0f1941" }}> kde chápeme a vítáme odlišnosti.</h1>
        <p
          style={{
            color: "#0f1941",
            lineHeight: "30px",
            fontSize: "18px",
            letterSpacing: "0",
          }}
        >
          Věříme, že si každý člověk bez ohledu na svůj původ zaslouží
          smysluplnou, jistou a důstojnou práci.
        </p>
        <p
          style={{
            color: "#0f1941",
            lineHeight: "30px",
            fontSize: "18px",
            letterSpacing: "0",
          }}
        >
          Chceme, aby naši lidé, stejně jako lidé, kterým pomáháme hledat práci,
          mohli být v zaměstnání sami sebou a cítili se začleněni, oceňováni a
          respektováni. Snažíme se proto o vytváření spravedlivějších a
          rozmanitějších pracovních míst - jak přímo u nás v Randstadu, tak i u
          našich klientů a partnerů.
        </p>
        <button
          className="btn btn-outline-primary blueBtn"
          style={{ padding: "20px", marginBottom: "50px" }}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          více informací
        </button>
      </div>
    </div>
  );
};

export default Rovnost;
