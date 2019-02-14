import React, { Component } from "react";
import CharacterCard from "../../components/CharacterCard";
import Wrapper from "../../components/wrapper";
import Title from "../../components/Title";
import Characters from "./Characters.json";
import Points from "../../components/Points"
import TopScore from "../../components/TopScore"
import firebase from "firebase";
import API from "../../utils/API";
class Game extends Component {
    state = {
        Characters,
        score: 0,
        topScore: 0,
        clicked: [],
        message: "",
        isbasic: true,
        isadvanced1: false,
        isadvanced2: false,
        deal:Characters.Characters.round1,
        user:firebase.auth().currentUser.displayName
    };


    componentDidMount() {
        this.setState({ deal: this.arrayShuffle() });
        API.saveName({
            username: firebase.auth().currentUser.displayName,
            
          })
            .then(res => this.scores())
            .catch(err => console.log(err));


    }


    arrayShuffle = () => {
        let newPos,
            temp;
        const _characters = this.state.deal;
        for (let i = _characters.length - 1; i > 0; i--) {
            newPos = Math.floor(Math.random() * (i + 1));
            temp = _characters[i];
            _characters[i] = _characters[newPos];
            _characters[newPos] = temp;
        }
        return _characters;

    };

    handleClick = (id) => {

        let clicked = this.state.clicked;
        let score = this.state.score + 1;
        let topScore = this.state.topScore;
        let message = "";
        let isbasic= this.state.isbasic;
        let isadvanced1= this.state.isadvanced1;
        let isadvanced2= this.state.isadvanced2;
        let deal = this.arrayShuffle();

        if (clicked.includes(id)) {
            score = 0;
            message = "you clicked that already";
            clicked = [];
            isbasic= true;
        isadvanced1= false;
        isadvanced2= false;
        }
        else {
            message = "you are correct"
            clicked = [...this.state.clicked, id]

        }

        if (score > topScore) {
            topScore = score;
            message = "you are correct"
            clicked = [...this.state.clicked, id]

        }

        if (score === 12) {
            score = 12;
            message = "you have beat the first level would you like to try the next level";
            clicked = [];
            isbasic=false;
            isadvanced1=true;
            deal= Characters.Characters.round2;
            this.scoresave();
           

        }
        

        if (score === 22) {
            score = 22;
            message = "you have beat the second level would you like to try the next level";
            clicked = [];
            isbasic=false;
            isadvanced1=false;
            isadvanced2=true;
            deal= Characters.Characters.round3;

        }

        this.setState({ deal, score, topScore, clicked, message,isbasic,isadvanced1, isadvanced2 })


    };


    scoreSave = user => {
        API.saveScore(

        {username: user},
            
          {score:this.state.score}  
            
            )

          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };




    render() {
        let deal
        let isbasic= this.state.isbasic;
        let isadvanced1= this.state.isadvanced1;
        let isadvanced2= this.state.isadvanced2;
        if (isbasic===true) {
            deal = this.state.Characters.Characters.round1.map(character => (


                <CharacterCard
                    handleClick={this.handleClick}
                    id={character.id}
                    name={character.name}
                    image={character.image}

                />

            ))
        }else if (isadvanced1 ===true) {
            deal = this.state.Characters.Characters.round2.map(character => (


                <CharacterCard
                    handleClick={this.handleClick}
                    id={character.id}
                    name={character.name}
                    image={character.image}

                />

            ))
        }
        if (isadvanced2 === true) {
            deal = this.state.Characters.Characters.round3.map(character => (


                <CharacterCard
                    handleClick={this.handleClick}
                    id={character.id}
                    name={character.name}
                    image={character.image}

                />

            ))
        }




        return (
            <Wrapper>
                <Title> Superhero Memory Game</Title>
                <Points>Score: {this.state.score}  <h2>{this.state.message}</h2></Points>
                <TopScore>Top Score: {this.state.topScore}</TopScore>

                {deal}

                <h1>View <a href="/Scores"   >Top Scores </a> </h1>
            </Wrapper>

        );
    }


}

export default Game;