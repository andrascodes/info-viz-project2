import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import PartOne from './PartOne';
import PartTwo from './PartTwo';

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedScreen: 1
    }
  }

  handleLinkClick = (id) => () => {
    this.setState(state => ({
      selectedScreen: id
    }))
  }

  render() {
    switch (this.state.selectedScreen) {
      case 1:
        return (
          <PartOne 
            onLinkClick={this.handleLinkClick}
            selectedScreen={this.state.selectedScreen}
          />
        )
      case 2:
        return (
          <PartTwo 
            onLinkClick={this.handleLinkClick}
            selectedScreen={this.state.selectedScreen}
          />
        )
      default:
        return (
          <PartOne 
            onLinkClick={this.handleLinkClick}
            selectedScreen={this.state.selectedScreen}
          />
        )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
