import React from "react";
//import { Col, Row, Container } from "../../components/Grid";
import PaperSheet from "../../components/Jumbotron";
import firebase from "firebase";
import Wrapper from "../../components/wrapper";
//import Wrapper from "../../components/Wrapper"
//import background from "../../../public/Images/logo.1.png"
import { Grid } from "@material-ui/core";

// const Style = {
//   width: "100%",
//   height: "400px",
//   backgroundImage: <img src={background } />
// };

const styles = theme => ({
  root: {
    flexGrow: 1,
  },


});

 
function Home() {

 return (
   <Wrapper>
     {/* //<div className={classes.root}> */}
    {/* <Container fluid>
      <Row>
       <Col size="md-12"> */}
       <Grid Container>
      
         <PaperSheet>
           <h1>Welcome {firebase.auth().currentUser.displayName}
           </h1>
           <h1>Click on  <a href="/Game"   >CONTINUE</a> to play the game!!!</h1>
         </PaperSheet>
        {/* </Col>
      </Row>
    </Container> */}
     </Grid>
     {/* </div> */}
  </Wrapper>
 
 );
}

// exporting Navbar
export default Home;