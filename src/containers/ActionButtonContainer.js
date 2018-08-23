import React, { Component } from "react";

URL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"

class GameContainer extends Component {

  state = {
    deck: {}
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(deck => this.setState({ deck }))
  }

    render() {
      console.log(this.state.deck);
      return (
        <div className="Buttons">
        <p>Game Container</p>
        </div>
    );
  }

}

export default GameContainer;
