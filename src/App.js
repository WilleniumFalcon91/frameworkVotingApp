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
          <img className="angular-logo" src="../angular.png"/>
          <img className="react-logo" src="../React-icon.svg"/>
          <img className="vue-logo" src="../Vue.png"/>
        </div>
      </div>
    );
  }
}

export default App;
