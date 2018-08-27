import React, { Component } from "react";
import ButtonContainer from "./ButtonContainer";
import Card from "../components/Card";


class PlayerHand extends Component {

  handleVisibleCards = (value) => {
    this.setState({ visibleCards: [...this.state.visibleCards, value ] })
    console.log(this.state.visibleCards);
  }

  generateCards = () => this.props.player.map(card => <Card handleVisibleCards={this.handleVisibleCards} card={card} />)

  convertFaces = () => this.props.player.map(card => {
    return card.value.includes("KING") ||
    card.value.includes("QUEEN") ||
    card.value.includes("ACE") ||
    card.value.includes("JACK") ? 10 : parseInt(card.value)
  })

  sumArray = (array = this.convertFaces()) => array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  });

    render() {
      const cards = this.generateCards()
      const array = this.convertFaces()
      const sum = array.length === 0 ? 0 : this.sumArray()
      return (
        <div className="player">
        <div id="count">{sum}</div>
        <div id="title">player</div>
        <div id="card" >{cards}</div>
        </div>
      );
  }

}

export default PlayerHand;
