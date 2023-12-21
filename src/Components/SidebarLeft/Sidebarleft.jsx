import React from "react";
import "./left.css";
import profileImage from '../../Assets/profile.jpg';

function Sidebarleft() {
  return (
    

<>
<div className="sidebar">
  <div className="profile">
    <div><img src={profileImage} alt="Avatar" className="avatar" /></div>
    <h4>Ram Mohan <i style={{color:"#0c6dbc"}} class="fa-solid fa-chevron-right fa-xs"></i></h4>
    <p>rammohan2@gmail.com</p>
  </div>
  <ul className="menu">
    <li className="active">
      <a href="">
        <i class="fa-solid fa-bars"></i>
        <span>Dashboard</span>
      </a>
    </li>
    <li>
      <a href="">
        <i class="fa-solid fa-person-snowboarding"></i>
        <span>Perks</span>
      </a>
    </li>
    <li>
      <a href="">
        <i class="fa-solid fa-puzzle-piece"></i>
        <span>Addons</span>
      </a>
    </li>
    <li>
      <a href="">
        <i class="fa-solid fa-circle-question"></i>
        <span>FAQ</span>
      </a>
    </li>
    <li>
      <a href="">
        <i class="fa-solid fa-headset"></i>
        <span>Support</span>
      </a>
    </li>
  </ul>
  <ul className="logout">
    <a href="">
      <span>Logout</span>
      <i class="fa-solid fa-power-off"></i>
    </a>
  </ul>
</div>
</>
  );
}

export default Sidebarleft;
