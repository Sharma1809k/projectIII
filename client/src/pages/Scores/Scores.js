import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Scores extends Component {
  // Setting our component's initial state
  state = {
    scores: [],
    username: "",
    score: ""
  };
 
  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
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
 
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
 
            <form>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="username (required)"
              />
              <Input
                value={this.state.score}
                onChange={this.handleInputChange}
                name="score"
                placeholder="score (required)"
              />
 
              <FormBtn
                disabled={!(this.state.score && this.state.username)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>High Scores</h1>
            </Jumbotron>
            {this.state.scores.length ? (
              <List>
                {this.state.scores.map(score => {
                  return (
                    <ListItem key={score._id}>
                      <a href={"/books/" + score._id}>
                        <strong>
                          {score.username} by {score.score}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteScore(score._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
 }
 
 export default Scores;