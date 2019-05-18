import React, { Component } from "react";
import PikminCard from "./components/PikminCard";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import cards from "./cards.json";

const EMPTY = {
  clickedCards: [],
};

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
    this.setState({ ...EMPTY})
  }

  checkIfClicked = (id) => {
    if (this.state.clickedCards.includes(id)) {
      this.setState({score: 0});
      this.setState({clickedCards: []})
      this.setState({message: "You Lost! Try Again"})
      this.setState({clickedCards: []})
      console.log("You Lost");
      console.log("score: ",this.state.score);
    } else {
      console.log("not in array");
      this.setState({ score: this.state.score + 1 })
      if (this.state.score === 5) {
        console.log("winner");
        this.setState({message: "Congratulations! You Won!"})
      };
    }
  }

  clickedOnce = (id) => {  
    const cards = this.state.cards;
    cards.sort(function(a, b){return 0.5 - Math.random()});
    this.setState({ cards });
    this.setState({clickedCards: this.state.clickedCards.concat(id)});
    const clicked = this.state.clickedCards
    console.log("Already Clicked:", clicked);
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
