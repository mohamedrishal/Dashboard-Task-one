import React from "react";
import "./secondcard.css";

function Secondcard({ card }) {
  return (
    <div className="secondcard-main-div">
      <div className="d1">
        <div className="btn1"  style={{ fontSize: "8px", backgroundColor: `${card.color}` }}>
            {card.fbtn}
        </div>
        <h2>{card.heading}</h2>
        <h2 style={{ fontSize: "12px", fontWeight: "200" }}>
          {card.discription}
        </h2>

        <div
          style={{ fontSize: "12px", backgroundColor: `${card.color}` }}
          className="btn"
        >
          {card.sbtn} <i class="fa-solid fa-arrow-right-long"></i>{" "}
        </div>
      </div>
      <div className="d2">
        <p style={{ fontSize: "12px" }}>What you'ii get :</p>
        <ul>
          <li>
            <i class="fa-regular fa-user"></i> Up to 25 Users
          </li>
          {card.storage !== " " && (
            <li>
              <i class="fa-solid fa-cloud-arrow-up"></i>{card.storage}
            </li>
          )}
          {card.email !== " " && (
            <li>
              <i class="fa-regular fa-envelope"> </i> {card.email}
            </li>
          )}
          {card.tic !== " " && (
            <li>
              <i class="fa-solid fa-check-double"></i>{" "}
              <span style={{ textAlign: "left" }}>{card.tic}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Secondcard;
