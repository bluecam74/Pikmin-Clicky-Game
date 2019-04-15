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

  //  onAddItem = () => {
  //   this.setState(state => { 
  //     const clickedCards = state.clickedCards.concat(state.card.id);
  //     return {
  //       clickedCards
  //     }
  //  }

  clickedOnce = (id) => {
    
    //const clickedCards = this.state.clickedCards.filter(card => card.id === id);
    // const clickedArr = clickedCards.concat(state.);
    // clickedArr.push(clickedCards);
    
    const cards = this.state.cards;
    cards.sort(function(a, b){return 0.5 - Math.random()});
    this.setState({ cards });
    console.log(cards);
    
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
