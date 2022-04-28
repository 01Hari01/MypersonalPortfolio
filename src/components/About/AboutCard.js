import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="About-font">
            Hi Everyone, I am <span className="purple">Hari Krishna</span>
            from <span className="purple">England.</span>
            <br />
            A Software Engineer who loves to transform ideas into reality using
            code.
            <br />
            After having a humble beginnings from a small town in South India,I completed
            <br />
            Engineering major in Computer Science and signed for Accenture as an Application Developer.
            <br/>
            After being associated with various Clients across the world, I finally decided to level up my game
            by pursuing Masters in Advanced Computer Science and I could  think of no other place than {" "}
              <strong>England</strong> specifically <strong>Liverpool</strong>.My journey with Britian started
              from school ever since I was a child. Always dreamt of visiting the great Architecture England contains.
            Apart from my profession, the three C's which changed my perception towards life are as below.
              If you observe keenly,its not only the letter C but also Curiosity is common among my hobbies.
              </span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Chess
            </li>
            <li className="about-activity">
              <ImPointRight />  Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Cinema
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
