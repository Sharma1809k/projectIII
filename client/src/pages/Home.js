import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import firebase from "firebase";
// import "./style.css";


// By importing the style.css file, it is added to the DOM whenever this component loads

// We use JSX curly braces to evaluate the style object on the JSX tag
function  Home() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
            <h1>Welcome {firebase.auth().currentUser.displayName}
           </h1>
              <h1>Click on  <a href="/books">CONTINUE</a> to play the game!!!</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
  
// exporting Navbar
export default Home;