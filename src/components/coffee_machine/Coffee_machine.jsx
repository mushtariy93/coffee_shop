import React from "react";
import "./Coffee_machine.scss";
import machine_image from "../../assets/machine_image.png";
const CoffeeMachine = () => {
  return (
    <div className="coffee__machine__wrapper">
      <div className="container">
        <div className="coffee__machine">
          <div className="coffee__machine__image">
            <img src={machine_image} alt="" />
          </div>
          <div className="coffee__machine__content">
            <h2> Coffee <br />machine, buy for home</h2>
            <p>
              mauris rhoncus in imperdiet placerat. vestibu emismd nisl
              suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa
              nibhtincidunt. donec et nib maximus, est eu, mattis nuce. preasent
              ut quam quis quam venen atis fri ngilla. morbi vastibulum id tells
              mmodo mattis. aliauam erat volutpal.
            </p>
            <div className="btn">
            <button>Discover now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeMachine;
