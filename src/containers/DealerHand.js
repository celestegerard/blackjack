import React, { Component } from "react";
import ButtonContainer from "./ButtonContainer";
import Card from "../components/Card";


class DealerHand extends Component {

  state = {
    visibile: []
  }

  visibleCards = () => {
    console.log("hits!");
  }

  generateCards = () => this.props.dealer.map(card => <Card card={card} visibleCards={this.visibleCards()} />)

  convertFaces = () => this.props.dealer.map(card => {
    return card.value.includes("KING") ||
    card.value.includes("QUEEN") ||
    card.value.includes("ACE") ||
    card.value.includes("JACK")  ? 10 : parseInt(card.value)
  })

  sumArray = (array = this.convertFaces()) => array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  });


    render() {
      const cards = this.generateCards()
      const filteredCards = cards.map(card => card.props)
      const array = this.convertFaces()
      const sum = array.length === 0 ? 0 : this.sumArray()
      console.log(sum);

      return (
        <div className="dealer">
        <div id="count">{sum}</div>
        <div id="title">dealer</div>
        <div>{cards}</div>
        </div>
    );
  }

}

export default DealerHand;
