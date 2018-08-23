import React, { Component } from "react";
import StartButton from "../components/StartButton";
import DealButton from "../components/DealButton";

URL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"

class ButtonContainer extends Component {

    render() {
      return (
        <div className="button-container">
        <DealButton handleDealClick={this.props.handleDealClick} />
        <StartButton handleStartClick={this.props.handleStartClick} />
        </div>
    );
  }

}

export default ButtonContainer;
