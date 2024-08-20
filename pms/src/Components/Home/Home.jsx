import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-desc">
          <h1>Parking Management System</h1>
          <p>
            We specialize in innovative car parking management solutions <br />
            designed to simplify, secure, and optimize parking for all types of{" "}
            <br />
            facilities. Whether you're managing a commercial parking lot, <br />
            residential complex, or a mixed-use development, our comprehensive{" "}
            <br />
            services ensure smooth operations and enhanced customer
            satisfaction.
          </p>
        </div>
        <div className="car-image">
          <img
            className="home-image"
            src="https://platform.cstatic-images.com/large/in/v2/stock_photos/144d35cd-39cf-4d9a-b904-37dc476decc0/899bfa06-fc5d-4dae-84ae-196078fe2715.png"
            alt="Parked Cars"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
