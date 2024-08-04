import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dhwanil kanthariya </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I am currently Studying in SCET in Surat.
            <br />
            I have completed Bechlore of Commerce (B.com) in Accounting at Sir K.P.
            College of Commerce.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Football
            </li>
           
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dhwanil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
