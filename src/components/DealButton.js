import React from "react";

const DealButton = props => {

      return (
        <div className="App">
        <div id="button" onClick={() => props.handleDealClick()} >
        <p id="b-text">2) deal!</p>
        </div>
        </div>
    );

}

export default DealButton;
