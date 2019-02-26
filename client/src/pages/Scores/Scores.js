import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import "./style.css";
import firebase from "firebase";
import Wrapper from "../../components/wrapper";
import Nav from "../../components/Nav";

let scoreSong = new Audio("./scoreSong.mp3");

class Scores extends Component {
  // Setting our component's initial state
  state = {
    scores: [],
    username: "",
    score: "",
    isPlaying: false
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.musicToggle();
    this.loadScores();

  }

  // Loads all books  and sets them to this.state.books
  loadScores = () => {
    API.getScores()
      .then(res =>
        this.setState({ scores: res.data, username: "", score: "" })

      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteScore = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.score) {
      API.saveScore({
        username: this.state.username,
        score: this.state.score
      })
        .then(res => this.scores())
        .catch(err => console.log(err));
    }
  };

  musicToggle = () => {
    let isPlaying = this.state.isPlaying;


    if (isPlaying === true) {
      scoreSong.pause();
      isPlaying = false;
    }
    else {
      scoreSong.play();
      isPlaying = true;
    }

    this.setState({ isPlaying })
  };

  render() {
    return (
      
      <Wrapper>
        <Nav> <nav className="navbar navbar-dark bg-primary">
        <div> <button onClick={this.musicToggle}><img className = "music" src = "./music-player.png" /></button>
      <a className="navbar-brand" href="/">
        Memory Game
     </a></div>
   
  <img className = "high" src = "./highScores.gif" />
     
       <form class="form-inline">
  
       <button className = "back"><a href="/Game">◀</a></button>
      
       <button onClick={() => firebase.auth().signOut()}><img className = "turn" src = "./turn-on.png" /></button>
             
        </form>
      </nav></Nav>
      
        <Container fluid>

      <Row>
      <Col size="md-4"><img className = "spider" src = "./spider.jpg" /></Col>
      <Col size="md-1"/>
        <Col size="md-5">
   
          {this.state.scores.length ? (
            <List>
              {this.state.scores.map(score => {
                return (

                  <marquee behavior="scroll" direction="up" scrollamount="1">
                    <a href={"/books/" + score._id}>
                      <strong>
                        {score.username} {score.score}
                      </strong>
                    </a>
                  </marquee>
  
                );
              })}
            </List>
          ) : (
              <h1>No Results to Display</h1>
            )}
 
    </Col>
    <Col size="md-2"/>
     </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default Scores;