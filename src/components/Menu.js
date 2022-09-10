import React from "react";

export default function Menu() {
  return (
    <div className="menuMain">
      <div className="container">
        <div className="logo" style={{ padding: "10px" }}>
          <h2 className="text-white">randstad</h2>
        </div>
        <div
          className="navbar"
          style={{ position: "absolute", top: "0", right: "0" }}
        >
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-fullscreen">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <h1>najděte si vysněnou práci.</h1>
          <p>použít současnou polohu</p>
          <button type="button" className="btn btn-primary">
            zacit s hledanim
          </button>
          <p>25 pracovních pozic</p>
        </div>
      </div>
    </div>
  );
}
