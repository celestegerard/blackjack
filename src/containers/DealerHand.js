import React, { Component } from "react";
import ButtonContainer from "./ButtonContainer";
import Card from "../components/Card";


class DealerHand extends Component {

  handleVisibleCards = (value) => {
    const string = value.value.toString()
    this.setState({ visible: this.state.visible })
    console.log(this.state);
  }

  generateCards = () => this.props.dealer.map(card => <Card card={card} handleVisibleCards={this.handleVisibleCards} />)

  convertFaces = () => this.props.dealer.map(card => {
    return card.value.includes("KING") ||
    card.value.includes("QUEEN") ||
    card.value.includes("ACE") ||
    card.value.includes("JACK")  ? 10 : parseInt(card.value)
  })

  sumArray = (array = this.convertFaces()) => array.reduce((acc, val) => {
    return acc + val
  });


    render() {
      const cards = this.generateCards()
      const filteredCards = cards.map(card => card.props)
      const array = this.convertFaces()
      const sum = array.length === 0 ? 0 : this.sumArray()

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
