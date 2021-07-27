import React from "react";
import cardImg from "../Assets/Image/card-simple.png";
import cardIcon from "../Assets/Image/icon.png";
import "../Assets/Style/card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__wrapper">
          <div className="card__image">
            <img src={cardImg} alt="" />
          </div>
          <div className="card__content">
            <h1>An Above Average Experience</h1>
            <p>
              Travel to the premiere mountain tops of New Zealand with our
              guided tours. Take in the majestic scenary and witness beauty.
            </p>
            <img src={cardIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
