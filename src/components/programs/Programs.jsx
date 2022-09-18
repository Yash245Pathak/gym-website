import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from '../../assets/rightArrow.png';

const Programs = () => {
  return (
    <>
      <div className="Programs" id="programs">
        <div className="programs-header">
          <span className="stroke-text">Explore Our </span>
          <span>Programs </span>
          <span className="stroke-text">To shape you</span>
        </div>

        <div className="program-category">
          {programsData.map((pg) => {
            return (
              <div className="category">
                {pg.image}
                <span>{pg.heading}</span>
                <span>{pg.details}</span>
                <div className="join-now">
                    <span>Join Now</span>
                    <img src={RightArrow} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Programs;
