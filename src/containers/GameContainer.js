import React, { Component } from "react";
import ButtonContainer from "./ButtonContainer";
import DealerHand from "./DealerHand";
import PlayerHand from "./PlayerHand";

URL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
const deal = "https://deckofcardsapi.com/api/deck/"
const times = "/draw/?count=2"
let id

class GameContainer extends Component {

  state = {
    deck: {},
    player:[],
    dealer: []
  }

  handleStartClick = () => {
    fetch(URL)
    .then(res => res.json())
    .then(deck => this.setState({ deck }));
    this.setState({player: [] })
    this.setState({ dealer: [] })
  }

  handleDealClick = () => {
    id = this.state.deck.deck_id
    console.log(id);

    fetch(deal + id + times)
    .then(res => res.json())
    .then(deal => this.setState({ player: [...this.state.player, deal.cards[0]] }));

    fetch(deal + id + times)
    .then(res => res.json())
    .then(deal => this.setState({ dealer: [...this.state.dealer, deal.cards[1]] }));

  }

    render() {
      console.log(this.state);
      return (
        <div className="App">
        <DealerHand dealer={this.state.dealer} />
        <PlayerHand player={this.state.player} />
        <ButtonContainer handleStartClick={this.handleStartClick} handleDealClick={this.handleDealClick} />
        </div>
    );
  }

}

export default GameContainer;
