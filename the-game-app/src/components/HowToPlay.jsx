import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const howTo = [
  {
    play: "Match-Game",
    play1: "This is a complete browser- based card matching game.",
    play2: "In Each turn:",
    play3: "The player flips one card over to reveal its underlying symbol.",
    play4:
      "The player then turns over a second card, trying to find the corresponding card with the same symbol.",
    play5: "If the cards match, both cards stay flipped over.",
    play6: "If the cards do not match, both cards are flipped face down.",
    play7: "The game ends once all cards have been correctly matched."
  }
];

/*---How to play section function --- */
function HowToPlay() {
  const myContent = howTo.map(info => (
    <Col className="play">
      <h1>How To Play</h1>
      <br />
      <Card style={{ width: "38rem" }}>
        <Card.Body>
          <Card.Title>{info.play}</Card.Title>
          <br />
          <Card.Text>{info.play1}</Card.Text>
          <Card.Text>*{info.play2}</Card.Text>
          <Card.Text>*{info.play3}</Card.Text>
          <Card.Text>*{info.play4}</Card.Text>
          <Card.Text>*{info.play5}</Card.Text>
          <Card.Text>*{info.play6}</Card.Text>
          <Card.Text>*{info.play7}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));
  return (
    <div>
      <Container>
        <Row>{myContent}</Row>
      </Container>
    </div>
  );
}

export default HowToPlay;
