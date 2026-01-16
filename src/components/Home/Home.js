import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/HariImage.jpeg";

import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
      <section>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={6} className="home-header">
                <h1 className="home-header__greeting">
                  Hi There!{" "}
                  <span className="home-header__wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                </h1>

                <h1 className="home-header__name">
                  This is <strong>Hari Krishna</strong>
                </h1>

                <p className="home-header__description">
                <span className="font-link">
                  "I am a professional Software developer with an abundant experience in
                  ReactJS, Redux and Python based frameworks. Being driven by the technological
                  advancements, I began diving deeply into the world of AI specifically DRL.
                  I always believe that everyday is a new day to learn something new..."
                </span>
                </p>

                <div className="home-header__typewriter">
                  <TypeWriter />
                </div>
              </Col>

              <Col md={5}>
                <img src={myImg} className="home-header__profile-pic" alt="avatar" />
              </Col>
            </Row>
          </Container>
        </Container>

        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={12} className="home-about-social">
                <h1 className="home-about-social__title">Get in Touch</h1>
                <p className="home-about-social__text">
                  Whether you want to get in touch, or talk about a project collaboration.
                  <br />
                  <strong>Feel free to connect with me</strong>
                </p>
                <SocialMedia />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
  );
}

export default Home;
