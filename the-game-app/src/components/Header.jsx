import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <header className="App-header">
      <Navbar md="light" variant="light">
        {/*---Logo icon image --- */}
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src="./gameLogo.jpg"
            width="200"
            height="79"
            padding="0"
            margin="0"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <h1 className="logoName"> Legendary Games</h1>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Nav className="mr-auto">
              <Link to="/">
                <Nav.Link href="#Home">Home</Nav.Link>
              </Link>
              <Link to="/TheGame">
                <Nav.Link href="#TheGame">Play Match Game</Nav.Link>
              </Link>
              <Link to="/HowToPlay">
                <Nav.Link href="#HowToPlay">Instruction</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <div className="homeTitle">
        <h1>LEGENDARY GAMES</h1>
      </div>
      <div className="dropdown">
        <Dropdown>
          <Dropdown.Toggle variant="primary" size="lg" id="dropdown-basic">
            Choose a Game
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Link to="/TheGame">
              <Dropdown.Item href="#TheGame">Play Match Game</Dropdown.Item>
            </Link>
            <Link to="/HowToPlay">
              <Dropdown.Item href="#HowToPlay">Instruction</Dropdown.Item>
            </Link>
            <Link to="/">
              <Dropdown.Item href="#">More Coming soon</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  );
}

export default Header;
