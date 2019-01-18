import React, { Component } from "react";

class Card extends Component {

  state = {
    faceup: false
  }

  handleClick = value => {
    this.setState({ faceup: !this.state.faceup })
    !this.state.faceup ? this.props.handleVisibleCards(value) : null
  }



    render() {
        const image = this.props.card.images.png
        const value = this.props.card.value
      return (
        <div className="App">
          {this.state.faceup ?
            <div
              className="faceup"
              onClick={() => this.handleClick({value})} >
              <p>{this.props.card.value}</p>
              <p>{this.props.card.suit}</p>
            </div>
            :
            <div className="facedown"
               onClick={() => this.handleClick({value})} >
               **********************
               **********************
               **********************
             </div>
             }
        </div>
    );
  }

}

export default Card;
