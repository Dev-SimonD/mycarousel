import React from "react";

export default function Footer() {
  return (
    <div
      style={{ backgroundColor: "#0f1941" }}
      data-aos-once="true"
      data-aos="fade-up"
    >
      <div>
        <div className="container row footerList">
          <ul className="col-sm-3">
            <li className="text-white">pro uchazeče</li>
            <li>nabídky práce</li>
            <li>poslat životopis</li>
            <li>práce dle oboru</li>
            <li>vyberte si zaměstnavatele</li>
          </ul>
          <ul className="col-sm-3">
            <li className="text-white">pro zaměstnavatele</li>
            <li>temporary help</li>
            <li>permanent placement</li>
            <li>inhouse services</li>
            <li>HR solutions</li>
          </ul>
          <ul className="col-sm-3">
            <li className="text-white">články</li>
            <li>randstad radí</li>
            <li>průvodce zaměstnáním</li>
          </ul>
          <ul className="col-sm-3">
            <li className="text-white">o nás</li>
            <li>kariéra</li>
            <li>kontakty</li>
            <li>tiskové zprávy</li>
            <li>historie</li>
            <li>pomáháme</li>
          </ul>
          <div className="divider"></div>
        </div>
        <div class="accordion container" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                pro uchazeče
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <ul>
                  <li>nabídky práce</li>
                  <li>poslat životopis</li>
                  <li>práce dle oboru</li>
                  <li>vyberte si zaměstnavatele</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div className="divider"></div>
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                pro zaměstnavatele
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <ul>
                  <li>temporary help</li>
                  <li>permanent placement</li>
                  <li>inhouse services</li>
                  <li>HR solutions</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div className="divider"></div>

            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                články
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <ul>
                  <li>randstad radí</li>
                  <li>průvodce zaměstnáním</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            {<div className="divider"></div>}
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                o nás
              </button>
            </h2>

            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <ul>
                  <li>kariéra</li>
                  <li>kontakty</li>
                  <li>tiskové zprávy</li>
                  <li>historie</li>
                  <li>pomáháme</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p
          className="container pt-3"
          style={{ color: "#6b718a", fontSize: "0.75rem" }}
        >
          Randstad HR Solutions s.r.o., IČ 08025851, DIČ CZ08025851 zapsaná v
          obchodním rejstříku vedeném Městským soudem v Praze, spisová značka C
          311763. Sídlo společnosti se nachází na adrese Praha 1, Nové Město,
          Jungmannova 26/15, tel.: 222 210 013 RANDSTAD, home, HUMAN FORWARD a
          SHAPING THE WORLD OF WORK registrované obchodní značky ve vlastnictví
          Randstad N.V.
        </p>
        <p className="container pt-3" style={{ color: "#6b718a" }}>
          © Randstad N.V. 2021. Všechna práva vyhrazena.
        </p>
        <div className="footer-list">
          <ul className="container">
            <li>všeobecné obchodní podmínky</li>
            <li>ochrana osobních údajů</li>
            <li>obchodní zásady</li>
            <li>lidská práva</li>
            <li>ochrana zdraví & bezpečnost při práci</li>
            <li>cookies</li>
            <li>ohlášení pochybení</li>
            <li>nahlášení zneužití</li>
            <li>ohlášení bezpečnostního problému</li>
            <li>mapa stránek</li>
          </ul>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}
