import React, { Component } from "react";

URL = 'https://deckofcardsapi.com/api/deck/new'

class GameContainer extends Component {

  state = {
    deck: {}
  }

  componentDidMount() {
    fetch(PROXYURL + URL)
      .then(res => res.json())
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
