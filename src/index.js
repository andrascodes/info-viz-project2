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
      selectedScreen: 2
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
          />
        )
      case 2:
        return (
          <PartTwo 
            onLinkClick={this.handleLinkClick}
          />
        )
      default:
        return (
          <PartOne 
            onLinkClick={this.handleLinkClick}
          />
        )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();