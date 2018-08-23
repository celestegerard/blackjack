import React, { Component } from "react";

class Card extends Component {

  state = {
    faceup: false
  }

  handleClick = () => {
    this.setState({ faceup: !this.state.faceup })
    console.log("props", this.props);
  }

    render() {
        const image = this.props.card.images.png
        console.log("VISIBLE", this.props)
      return (
        <div className="App">
          {this.state.faceup ?
            <div
              className="faceup"
              onClick={() => console.log(this.props)} >
              <p>{this.props.card.value}</p>
              <p>{this.props.card.suit}</p>
            </div>
            :
            <div className="facedown"
               onClick={() => console.log(this.props)} >
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
               **********************
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
