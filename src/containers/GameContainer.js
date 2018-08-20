import React, { Component } from "react";

URL = 'https://deckofcardsapi.com/api/deck/new'

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
        <div className="App">
        Black Jack
        </div>
    );
  }

}

export default GameContainer;
