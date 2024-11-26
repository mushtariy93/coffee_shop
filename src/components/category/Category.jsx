import React from "react";
import "./Category.scss";

import categoryImage1 from "../../assets/Rectangle1.png";
import categoryImage2 from "../../assets/Rectangle2.png";
import categoryImage3 from "../../assets/Rectangle3.png";
const Category = () => {
  return (
    <div className="category__wrapper">
      <div className="container">
        <div className="category">
          <div className="category__item">
            <p>
              <span>01</span> Best Coffee Flavour
            </p>
            <img src={categoryImage1} alt="" />
          </div>

          <div className="category__item">
            <p>
              <span>02</span> Place to get lost
            </p>

            <img src={categoryImage2} alt="" />
          </div>

          <div className="category__item">
            <p>
              <span className="span">03</span> Proper roesting
            </p>
            <img src={categoryImage3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
