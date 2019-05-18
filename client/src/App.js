import React, { Component } from "react";
import PikminCard from "./components/PikminCard";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import cards from "./cards.json";

const EMPTY = [];

class App extends Component {

  state = {
    cards,
    clickedCards: EMPTY,
    score: 0,
    message: "Don't Click the Same Picture Twice!" 
  };

  resetGame = () => {
    this.setState({score: 0});
    this.setState({message: "Don't Click the Same Picture Twice!"});
    this.setState({clickedCards: EMPTY})
  }

  checkIfClicked = (id) => {
    if (this.state.clickedCards.includes(id)) {
      this.setState({score: 0});
      this.setState({message: "You Lost! Try Again"})
      this.setState({clickedCards: EMPTY})
    } else {
      this.setState({ score: this.state.score + 1 })
      if (this.state.score === 14) {
        this.setState({message: "Congratulations! You Won!"});
        this.setState({score: 0});
        this.setState({clickedCards: EMPTY});
      };
    }
  }

  clickedOnce = (id) => {  
    const cards = this.state.cards;
    cards.sort(function(a, b){return 0.5 - Math.random()});
    this.setState({ cards });
    this.setState({clickedCards: this.state.clickedCards.concat(id)});
    this.setState({message: "Don't Click the Same Picture Twice!"});
    const clicked = this.state.clickedCards
    this.checkIfClicked(id);

  };

  render() {
    return (
      <div>
        <Score score={this.state.score} 
          message={this.state.message}
          resetGame = {this.resetGame}> 
          </Score>
      <Wrapper>
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

      </div>
      
    );
  }
}

export default App;
