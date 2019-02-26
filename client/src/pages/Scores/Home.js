import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import firebase from "firebase";
import Nav from "../../components/Nav";
import Wrapper from "../../components/wrapper";
import Wrap  from "../../components/wrap";

function Home() {

  return (
    <Wrap>
    <Nav> <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Memory Game
     </a>
     
       <form class="form-inline">
       <div className= "signOut">
       <button onClick={() => firebase.auth().signOut()}><img className = "turn" src = "./turn-on.png" /></button>
             </div>
        </form>
      </nav></Nav>
    <Container >
      <Row>
        <Col size="md-12">
          <Jumbotron>
          <img className = "profile" alt="profile" src={firebase.auth().currentUser.photoURL}/>
            <h1>Welcome {firebase.auth().currentUser.displayName}
            </h1>
            <h1>Click on  <a href="/Game"   >CONTINUE</a> to play the game!!!</h1>
         </Jumbotron>
    </Col>
     </Row>
     </Container>
     </Wrap>
  );
}

export default Home;