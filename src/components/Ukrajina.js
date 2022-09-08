import React from "react";
import ukrajinaLogo from "../assets/ukrajina.png";

export default function Ukrajina() {
  return (
    <div className="ukrajinaMain">
      <div className="container ukrajinaLow">
        <div className="d-flex justify-content-center col-lg-6">
          <img
            src={ukrajinaLogo}
            className="ukrajinaLogo"
            style={{ padding: "60px 0", width: "90%" }}
          />
        </div>
        <div className="col-lg-6">
          <h2 className="text-white">Робота для Українців</h2>
          <h4 className="text-white">
            Вас цікавить робота в Чехії? ми пропонуємо Вам допомогу в
            організації роботи з одним із наших перевірених клієнтів.
          </h4>
          <button className="btn btn-outline-light mt-5 p-3">
            {" "}
            більше інформації
          </button>
        </div>
      </div>
    </div>
  );
}
