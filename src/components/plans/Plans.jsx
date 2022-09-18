import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <>
      <div className="plans-container">
        <div className="programs-header">
          <span className="stroke-text">ready to start</span>
          <span>your journey</span>
          <span className="stroke-text">now with us</span>
        </div>

        <div className="plans">
          {plansData.map((plan, i) => {
            return (
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>

              <div className="features">
                {plan.features.map((f,i)=>{
                  return (
                    <div className="feature">
                        <img src={whiteTick} alt="" />
                        <span key={i}>{f}</span>
                    </div>
                  )
                })}
              </div>
              <span>See more benefits:-</span>
              <div>
                <button className="btn">
                  Join Now
                </button>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Plans;
