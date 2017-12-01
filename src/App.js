import React, { Component } from 'react';
import { VOTE_ANGULAR, VOTE_REACT, VOTE_VUE } from './actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(VOTE_ANGULAR());
  }
  handleVoteReact = () => {
    this.store.dispatch(VOTE_REACT());
  }
  handleVoteVue = () => {
    this.store.dispatch(VOTE_VUE());
  }
  render() {
    return (
      <div>
        <div className="jumbotron" style={{'textAlign': 'center'}}>
          <h2>What is your favorite front-end framework in 2017?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br />
            <div>
                <img 
                  className="angular-logo" src="../angular.png" alt="angular"
                  onClick={this.handleVoteAngular}
                />
                <img 
                  className="react-logo" src="../React-icon.svg" alt="react"
                  onClick={this.handleVoteReact}
                />
                <img 
                  className="vue-logo" src="../Vue.png" alt="vue"
                  onClick={this.handleVoteVue}
                />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
