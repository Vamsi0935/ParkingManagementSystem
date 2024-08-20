import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-info">
          <h1 style={{ textAlign: "center" }}>Contact Us</h1>
          <p>
            If you have questions, need support, or want to learn more about our <br />
            parking management solutions, we’d love to hear from you. Our team
            is ready to assist you with any inquiries or concerns.
          </p>
        </div>

        <div className="contact-details" style={{ textAlign: "center" }}>
          <h2>Contact Information:</h2>
          <ul>
            <li>
              <strong>Phone:</strong> +91 9391128446
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:[Your Email Address]">vamsi093511@gmail.com</a>
            </li>
            <li>
              <strong>Address:</strong> Hyderabad, Telangana
            </li>
          </ul>
        </div>
        <footer className="footer">
          <div className="social-media">
            <h2>Follow Us:</h2>
            <ul>
              <li>
                <a
                  href="[Facebook Link]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="[Twitter Link]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="[LinkedIn Link]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="urgent-support">
            <p>
              For urgent issues or immediate support, please call us directly at{" "}
              <strong>+91 9391128446</strong> during office hours.
            </p>
          </div>
          <p>All rights are reserved. &copy; Vamsi Krishna D </p>
        </footer>
      </div>
    </>
  );
};

export default Contact;
