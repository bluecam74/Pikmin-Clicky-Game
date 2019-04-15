import React, { Component } from "react";
import PikminCard from "./components/PikminCard";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    clickedCards: []
  };

  checkIfClicked = (id) => {
    console.log("Hello");
    if (this.state.clickedCards.includes(id)) {
      console.log("in array");
    } else {
      console.log("not in array");
    }

  }

  clickedOnce = (id) => {  
    console.log("yes")  
    const cards = this.state.cards;
    cards.sort(function(a, b){return 0.5 - Math.random()});
    this.setState({ cards });
    console.log(cards);
    this.setState({clickedCards: this.state.clickedCards.concat(id)});
    const clicked = this.state.clickedCards
    console.log(clicked);
    this.checkIfClicked(id);

  };

  


  render() {
    return (
      <Wrapper>
        <Score>Current Score: </Score>
        {this.state.cards.map(card => (
          <PikminCard
            checkIfClicked={this.checkIfClicked}
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
