import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaPinterest,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import logo from "../../assets/logo.svg";
import Modal from "./Modal";
import { ToastContainer } from "react-toastify";

import React, { useState } from "react";

function Footer() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="footer-wrapper">
      <ToastContainer />

      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-brand">
            <img src={logo} alt="logo" />
          </div>
          <h2 className="footer-logo">Fintech</h2>
          <p className="footer-desc">
            Imagine having a customized dashboard software with all your needs.
            With our API Integrations; Payment has never been easier to navigate
            before our "TPD" subsidiary firm "Fintesa", especially but NOT
            exclusively for the MENA region!.
          </p>
          <div className="footer-social">
            <FaFacebook className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaPinterest className="social-icon" />
          </div>
        </div>
        <div className="footer-center">
          <h3 className="footer-title">Useful Links</h3>
          <ul className="footer-list">
            <li className="footer-list-item">Home</li>
            <li className="footer-list-item">Sign Up</li>
            <li className="footer-list-item">My Account</li>
            <li className="footer-list-item">Blog</li>
            <li className="footer-list-item">Careers</li>
            <li className="footer-list-item">About Us</li>
            <li className="footer-list-item">Terms</li>
          </ul>
        </div>
        <div className="footer-right">
          <div className="footer-contact-item">Contact</div>
          <div className="footer-contact-item">
            <FaMapMarkerAlt style={{ marginRight: "10px" }} /> Amman , Jordan
          </div>
          <div className="footer-contact-item">
            <FaPhone style={{ marginRight: "10px" }} /> +1 234 56 78
          </div>
          <div className="footer-contact-item">
            <IoMailOutline style={{ marginRight: "10px" }} />{" "}
            contact@fintech.com
          </div>
          <div>
            <button onClick={() => setOpenModal(true)} className="modalButton">
              Contact Us
            </button>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
