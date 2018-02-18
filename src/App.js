import React, { Component } from 'react'
import './App.css'

import { 
  ParallelCoordinatesContainer,
  MapContainer
} from './components'

import dataW1 from './assets/dataW1.json'
// import dataW2 from './assets/dataW1.json'
// import dataW3 from './assets/dataW1.json'
// import dataW4 from './assets/dataW1.json'
import dimensions from './assets/dimensions.json'
import continentToColourMap from './assets/continentToColourMap.json'

const data = dataW1

class App extends Component {
  
  constructor(props) {
    super(props)

    this.state ={
      highlighted: data,
      selectedCountry: undefined,
    }
  }

  handleBrush = (e) => {
    const isSelectedCountryUndefined = this.state.selectedCountry === undefined
    const areArraysEqual = (array1, array2) => {
      if(array1 === undefined || array2 === undefined) {
        return true
      }
      if(array1.length !== array2.length) {
        return false
      }
      
      return array1.every((value, index) => value.code === array2[index].code)
    }

    if(!isSelectedCountryUndefined || !areArraysEqual(e.data, this.state.highlighted)) {
      console.log('state change', e.data)
      this.setState(state => ({
        highlighted: e.data,
        selectedCountry: undefined,
      }))
    }
  }

  handleClick = (e) => {
    const clickedId = e.properties.ISO_A2.toLowerCase()
    const clickedData = data.filter(({code}) => code === clickedId)
    if(clickedData.length > 0) {
      this.setState(state => ({
        highlighted: clickedData,
        selectedCountry: clickedData,
      }))
    }
  }

  render() {
    return (
      <div className="App">
        <ParallelCoordinatesContainer
          data={data}
          dimensions={dimensions}
          highlightedItem={this.state.selectedCountry}
          onBrush={this.handleBrush}
          color={continentToColourMap}
        />
        <MapContainer 
          highlighted={this.state.highlighted}
          onClick={this.handleClick}
          color={continentToColourMap}
        />
      </div>
    );
  }
}

export default App