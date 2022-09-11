import React from "react";
import potencialImage from "../assets/potencial.png";

export default function Potencial() {
  return (
    <div className="rovnostMain" style={{ backgroundColor: "#f7f5f0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            height: "200px",
            objectFit: "cover",
            width: "95%",
            marginTop: "50px",
          }}
          className="rovnostImg"
          src={potencialImage}
        />
      </div>
      <div
        className="rovnostText"
        style={{ Width: "width: calc((23/58)*100%)" }}
      >
        <h1
          style={{ color: "#0f1941", letterSpacing: "0", paddingtop: "30px" }}
        >
          vidíme váš skutečný potenciál.
        </h1>
        <p
          style={{
            color: "#0f1941",
            lineHeight: "30px",
            fontSize: "18px",
            letterSpacing: "0",
          }}
        >
          V Randstadu jsme vždy chápali, jak důležitá je práce v životě člověka
          a jak správný talent přispívá k úspěchu organizace. Ať už jsou lidé ve
          svém pracovním životě kdekoli, snažíme se je posouvat vpřed tím, že
          spojujeme naši vášeň pro lidi se silou technologií. Říkáme tomu
          #humanforward - a společně s našimi kolegy po celém světě tvrdě
          pracujeme na tom, abychom tomu každý den dostáli.
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
}
