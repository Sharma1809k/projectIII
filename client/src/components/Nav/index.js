import React from "react";
import firebase from "firebase";
import "./style.css";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Memory Game
      </a>
      <div className= "signOut">
      <button><a href="/">Go back</a></button>
            {/* <div>Signed In!</div> */}
            <img className = "profile"
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
            <button  onClick={() => firebase.auth().signOut()}>Sign out!</button>
          </div>
    </nav>
  );
}

export default Nav;
