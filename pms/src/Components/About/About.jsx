import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <section className="about-content">
        <div className="about-desc">
          <header className="about-header">
            <h1>About Us</h1>
          </header>
          <p>
            We are dedicated to making parking easy and efficient. Our advanced{" "}
            <br />
            parking management solutions leverage the latest technology to help{" "}
            <br />
            you find, use, and pay for parking with ease. Our mission is to{" "}
            <br />
            streamline parking operations and enhance user experiences. Whether{" "}
            <br />
            you're a business, municipality, or individual, our solutions are{" "}
            <br />
            designed to optimize parking space usage and provide seamless
            convenience.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2343/2343936.png"
            alt="Parking Icon"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
