import React from "react";

export default function Kategorie() {
  return (
    <div className=" kategorieMain">
      <div
        className="container kategorie-list"
        style={{ paddingInline: "20px" }}
      >
        <h2 className="pt-5" style={{ color: "#0f1941", fontSize: "32px" }}>
          kategorie pracovních nabídek
        </h2>
        <br />
        <ul>
          <li>výroba a průmysl</li>
          <hr />
          <li>doprava, logistika a zásobování</li>
          <hr />
          <li>strojírenství</li>
          <hr />
          <li>prodej a obchod</li>
          <hr />
          <li>administrativa</li>
          <hr />
          <li>zákaznický servis</li>
          <hr />
          <li>ekonomika a podnikové finance</li>
          <hr />
          <li>personalistika a hr</li>
          <hr />
          <li>zobrazit všechny nabídky</li>
          <hr />
        </ul>
      </div>
    </div>
  );
}
