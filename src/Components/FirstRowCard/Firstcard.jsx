import React from "react";
import "./firstcard.css";

function Firstcard({ card }) {
  return (
    <div className="card-border">
      <div>
        <h2>{card.heading}</h2>
        <h2 style={{ fontSize: "12px", fontWeight: "200" }}>
          <del style={{ color: "red" }}>
            <div style={{ color: "black" }}>$ {card.rs}</div>
          </del>
        </h2>
        <h2 style={{ fontSize: "24px", fontWeight: "200" }}>
          $ {card.offerpice}
        </h2>
        <div
          style={{ fontSize: "12px", backgroundColor: `${card.color}` }}
          className="btn"
        >
          Get started <i class="fa-solid fa-arrow-right-long fa-xl"></i>{" "}
        </div>
      </div>
      <hr
        style={{
          height: "1px",
          borderWidth: "0",
          marginTop: "15px",
          color: "black",
          background: "#8d8d8d",
        }}
      />

      <div className="under-hr">
        <p style={{ fontSize: "12px" }}>What you'ii get :</p>
        <ul>
          <li>
            <i class="fa-regular fa-user"></i> {card.users}
          </li>
          <li>
            <i class="fa-solid fa-cloud-arrow-up"></i>
            {card.storage}
          </li>
          <li>
            <i class="fa-regular fa-envelope"> </i> {card.email}
          </li>
        </ul>
        <div className="link">
          <a style={{ color: "black" }} href="">
            EXPLORE FEATURES
          </a>{" "}
          <i
            style={{ color: `${card.color}` }}
            class="fa-solid fa-caret-right "
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Firstcard;
