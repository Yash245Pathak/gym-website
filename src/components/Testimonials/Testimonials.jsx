import React from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className="testimonials">
      <div className="left-s">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>
          <span> - {testimonialsData[selected].status}</span>
        </span>
      </div>
      <div className="right-s">
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img onClick={()=>{
            selected != 0 ? setSelected(tLength - 1) : setSelected(selected + 1)
          }}
           src={leftArrow} alt="" />
          <img onClick={()=>{
            selected == 0 ? setSelected(tLength - 1) : setSelected(selected - 1)
          }}
           src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
