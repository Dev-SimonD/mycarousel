import React from "react";

export default function KdoJsme() {
  return (
    <div
      className=" d-flex justify-content-center  kdojsmeMain"
      style={{
        backgroundColor: "#2175d9",
        flexDirection: "column",
        padding: "50px 25px",
      }}
      data-aos="flip-left"
      data-aos-once="true"
    >
      <div className="container" id="kdojsmeh">
        <h2 style={{ color: "white" }}>kdo jsme?</h2>
      </div>
      <div className="container" id="jsme">
        <h4 id="kdojsmeText" style={{ color: "white", marginTop: "30px" }}>
          Jsme <span style={{ color: "#0f1941" }}>Randstad.</span> Pomáháme
          lidem najít vysněnou práci a firmám motivované zaměstnance. Posouváme
          trh práce kupředu.{" "}
        </h4>
      </div>
    </div>
  );
}
