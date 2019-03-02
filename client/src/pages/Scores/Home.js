import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import PaperSheet from "../../components/Jumbotron";
import firebase from "firebase";
//import Wrapper from "../../components/Wrapper"
//import background from "../../../public/Images/logo.1.png"

// const Style = {
//   width: "100%",
//   height: "400px",
//   backgroundImage: <img src={background } />
// };




//import "./style.css";
{/* <style> 
  background-image:url("./logo.png");
 </style> */}

function Home() {

 return (
   <Container fluid>
     <Row>
       <Col size="md-12">
         <PaperSheet>
           {/* <h1>Welcome {firebase.auth().currentUser.displayName}
           </h1>
           <h1>Click on  <a href="/Game"   >CONTINUE</a> to play the game!!!</h1> */}
         </PaperSheet>
       </Col>
     </Row>
   </Container>
 );
}

// exporting Navbar
export default Home;