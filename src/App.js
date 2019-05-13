import React from 'react';
import Header from "./components/Header";
import Card from "./components/Card";
import cards from "./data/cards.json";
import campaigns from "./data/campaigns.json";
import './styles/custom.css';

class App extends React.Component {
  state = {
    cards: [],
    campaigns: []
  };

  componentDidMount() {
    this.loadCards();
    this.loadCampaign();
  };

  loadCampaign = () => {
    this.setState({
      campaigns
    });
  };
  loadCards = () => {
    this.setState({
      cards
    });
  };

  //app render
  render() {
    return (
      <div>
        <Header campaigns={{campaigns: this.state.campaigns}}/>
        <div className="container">
          <div className="cards row justify-content-sm-between">
            {this.state.cards && this.state.cards.map((card,i) => {
              return <Card
                key = {card.cardTitle}
                index = {card.i}
                details = {this.state.cards[i]}
              />
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
