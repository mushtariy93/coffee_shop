import React from "react";
import popularProductImage from "../../assets/image1.png";
import { FiShoppingBag } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

import "./Product.scss";
const Product = () => {
  return (
    <div className="pproduct__wrapper">
      <div className="container">
        <div className="pproduct">
          <div className="pproduct__content">
            <p>
              <span>Popular Product</span>
            </p>
            <h3>Coffee popular Product</h3>
          </div>
          <div className="pproduct__images">
            <div className="pproduct__item">
              <div className="images">
                <img src={popularProductImage} alt="" />
              </div>
              <p>BRAZIL COFFEE GRED</p>
              <div className="btn">
                <FiShoppingBag />
                <button className="button">Add to cart</button>
              </div>
            </div>
            <div className="pproduct__item">
              <div className="images">
                <img src={popularProductImage} alt="" />
              </div>
              <span>
                COFFEE <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaRegStar className="star" />
              </span>
              <p>BRAZIL COFFEE GRED</p>
              <em>
                PRICE - <span>$320.00/</span> $538
              </em>
            </div>
            <div className="pproduct__item">
              <div className="images">
                <img src={popularProductImage} alt="" />
              </div>
              <span>
                COFFEE <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaRegStar className="star" />
              </span>
              <p>BRAZIL COFFEE GRED</p>
              <em>
                PRICE - <span>$320.00/</span> $538
              </em>
            </div>
          </div>
          <div className="pproduct__btn">
            <button>VIEW ALL PRODUCT</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
