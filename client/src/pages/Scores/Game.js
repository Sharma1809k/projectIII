import React, { Component } from "react";
import CharacterCard from "../../components/CharacterCard";
import Wrapper from "../../components/wrapper";
import Title from "../../components/Title";
import Characters from "./Characters.json";
import Points from "../../components/Points"
import TopScore from "../../components/TopScore"
import firebase from "firebase";
import API from "../../utils/API";
import Nav from "../../components/Nav";

let themeSong = new Audio("./avengsong.mp3");
class Game extends Component {
    state = {
        Characters,
        score: 0,
        topScore: 0,
        clicked: [],
        message: "Click on an image to earn points, but don't click on any more than once!",
        isbasic: true,
        isadvanced1: false,
        isadvanced2: false,
        deal: Characters.Characters.round1,
        user: firebase.auth().currentUser.displayName,
        isPlaying: false,
    };

    componentDidMount() {

        this.musicToggle();
        this.setState({ deal: this.arrayShuffle() });
        API.saveName({
            username: firebase.auth().currentUser.displayName,
            score: 0
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
        let endgame = new Audio("./gameover.mp3");
        let clickgame = new Audio("./gameclick.mp3");
        let levels = new Audio("./levelup.mp3");
        let level2 = new Audio("./levelups.mp3")
        let clicked = this.state.clicked;
        let score = this.state.score + 1;
        let topScore = this.state.topScore;
        let message = "";
        let isbasic = this.state.isbasic;
        let isadvanced1 = this.state.isadvanced1;
        let isadvanced2 = this.state.isadvanced2;
        let deal = this.arrayShuffle();

        clickgame.play();
        if (clicked.includes(id)) {
            score = 0;

            endgame.play();
            message = "😟 Incorrect!! Click an image to start again!";
            clicked = [];
            isbasic = true;
            isadvanced1 = false;
            isadvanced2 = false;
        }
        else {

            message = "😎 You are correct";
            clicked = [...this.state.clicked, id];
            this.scoreSave(score);
        }

        if (score > topScore) {
            topScore = score;
            message = "😎 You are correct";
            clicked = [...this.state.clicked, id];

        }

        if (score === 12) {
            score = 12;
            message = "YAY!!! You have beat the first level would you like to try the next level 👍";
            levels.play();
            level2.play();
            clicked = [];
            isbasic = false;
            isadvanced1 = true;
            deal = Characters.Characters.round2;

        }


        if (score === 22) {
            score = 22;
            message = "you have beat the second level would you like to try the next level";
            levels.play();
            level2.play();
            clicked = [];
            isbasic = false;
            isadvanced1 = false;
            isadvanced2 = true;
            deal = Characters.Characters.round3;
        }

        this.setState({ deal, score, topScore, clicked, message, isbasic, isadvanced1, isadvanced2 })
    };


    musicToggle = () => {
        let isPlaying = this.state.isPlaying;
        
        if (isPlaying === true) {
            themeSong.pause();
            isPlaying = false;
        }
        else {
            themeSong.play();
            isPlaying = true;
        }

        this.setState({ isPlaying })
    };

    scoreSave = (_score) => {

        API.saveScore(
            {
                username: this.state.user,
                score: _score
            }
        )
            .then(res => this.scores())
            .catch(err => console.log(err));
    };

    render() {
        let deal
        let isbasic = this.state.isbasic;
        let isadvanced1 = this.state.isadvanced1;
        let isadvanced2 = this.state.isadvanced2;
        if (isbasic === true) {
            deal = this.state.Characters.Characters.round1.map(character => (


                <CharacterCard
                    handleClick={this.handleClick}
                    id={character.id}
                    name={character.name}
                    image={character.image}

                />

            ))
        } else if (isadvanced1 === true) {
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
                  <Nav> <nav className="navbar navbar-dark navy bg-primary">
                 <div> <button onClick={this.musicToggle}><img className = "music" src = "./music-player.png" /></button>
      <a className="navbar-brand" href="/">
        Memory Game
     </a></div>
     <h3>{this.state.message}</h3>
       <form class="form-inline">
  
       <button className = "back"><a href="/">◀</a></button>
       <button onClick={() => firebase.auth().signOut()}><img className = "turn" src = "./turn-on.png" /></button>
      
        </form>
      </nav></Nav>
              <div className= "board">
 
                <TopScore> Score: {this.state.score} | | Top Score: {this.state.topScore}<p>View <a href="/Scores"   >Top Scores </a> </p></TopScore>
                </div>

                {deal}

            </Wrapper>
        );
    }
}

export default Game;