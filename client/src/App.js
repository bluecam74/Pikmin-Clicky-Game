import React, { Component } from "react";
import PikminCard from "./components/PikminCard";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards
  };

  clickedOnce = id => {
    const cards = this.state.cards.filter(card => card.id !== id);
    this.setState({ cards });
  };

  render() {
    return (
      <Wrapper>
        <Score>Current Score: </Score>
        {this.state.cards.map(card => (
          <PikminCard
            clickedOnce={this.clickedOnce}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
