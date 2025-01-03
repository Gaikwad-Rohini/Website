import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const NavComponent = () => {
  return (
    <>
      <div className="social-container">
        <a href="https://www.twitter.com" className="social-element">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="http://www.instagram.com/larnbuildteach"
          className="social-element"
          id="insta"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.facebook.com/learnbuildteach/"
          className="social-element"
          id="fecebook"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.youtube.com/c/jamesqquick"
          className="social-element"
          id="youtube"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="mailto:email@gmail.com" className="social-element" id="mail">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <Navbar className="nav-bar">
        <Container>
          <Nav className="me-auto">
            <Navbar.Brand href="#home" className="site-title">
              SWWAPNIL JOSHI
            </Navbar.Brand>{" "}
            &nbsp;
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="about">ABOUT</Nav.Link>
            <Nav.Link to="upcoming">
              UPCOMING <span className="pa-callout-right">New</span>
            </Nav.Link>
            <Nav.Link to="on air">ON AIR</Nav.Link>
            <Nav.Link to="work">WORK</Nav.Link>
            <Nav.Link href="imagecarousel">ENDORSEMENT</Nav.Link>
            <Nav.Link href="gallery">GALLERY</Nav.Link>
            <Nav.Link to="awards">AWARDS</Nav.Link>
            <Nav.Link href="news">NEWS</Nav.Link>
            <Nav.Link to="connect">CONNECT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavComponent;
