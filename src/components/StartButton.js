import React from "react";

const StartButton = props => {

      return (
        <div className="App">
        <div id="button" onClick={() => props.handleStartClick()} >
        <p id="b-text">1) start game!</p>
        </div>
        </div>
    );

}

export default StartButton;
