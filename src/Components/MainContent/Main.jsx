import React, { useState } from "react";
import "./main.css";
import Firstcard from "../FirstRowCard/Firstcard";
import Secondcard from "../SecondRowCard/Secondcard.jsx";

function Main() {
  const [firstRow, setFirstRow] = useState([
    {
      heading: "Basic",
      rs: "89.99/mo",
      offerpice: "99.99/mo",
      users: "Upto 25 Users",
      storage: "Upto 25gb Storage",
      email: "Email Support",
      color:"#ffe7a9"
    },
    {
      heading: "Standard",
      rs: "189.99/mo",
      offerpice: "99.99/mo",
      users: "Upto 50 Users",
      storage: "Upto 60gb Storage",
      email: "Email+Chart Support",
      color:"#ff9494"
    },
    {
      heading: "Premium",
      rs: "389.99/mo",
      offerpice: "99.99/mo",
      users: "Upto 75 Users",
      storage: "Upto 100gb Storage",
      email: "Email+Chat+Whatspp Support",
      color:"#e7a2ff"
    }
  ]);

  const [secondRow, setSecondRow] = useState([
    {
      heading: "Free Starter",
      fbtn: "Free Forever",
      discription: "The quickest and easiest way to try Protocols with basic functionalities",
      users: "Upto 8 Users",
      storage: "Upto 3gb Storage",
      email: "Email Support",
      tic:"Basics of Documents, Task Flow Voting, Accounting, Banking, Notes, Invester, Director and Team Management included",
      color:"#c6ff8e",
      sbtn:"Get Started"
    },
    {
      heading: "Enterprise Plan",
      fbtn: "Let's Connect",
      discription: "Effortlessly customize and fine-tune services as your needs shift,ensuring the perfect tools for success",
      users: "Upto 75 Users",
      storage: " ",
      email: " ",
      tic:"Cusomization of all other features",
      color:"#8ab9ff",
      sbtn:"Contact Us"
    }
  ]);

  return (
    <>
      <div className="main-content">
        <h2>Choose a plan that's just right for you !</h2>
        <div className="first-row">
          {/* Button  */}
          <div className="plan-period">
            <div className="plan-period-border">
              <button className="active" href="">
                Monthly
              </button>
              <button href="">
                Annually<sup style={{ color: "green" }}>-10%</sup>
              </button>
            </div>
          </div>
          {/* plan   */}
          <div className="plan">

            {  firstRow.length>0 && firstRow.map((card,index)=>(
                 <Firstcard key={index}  card={card} />
            ))

            }
          </div>
        </div>
        <div className="second-row">
         { secondRow.length > 0 && 
           secondRow.map((card, index)=>(
            <Secondcard key={index} card={card} />
           ))
         }
        </div>
      </div>
    </>
  );
}

export default Main;
