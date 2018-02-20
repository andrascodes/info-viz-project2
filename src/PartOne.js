import React, { Component } from 'react'
import './PartOne.css'

import { 
  ParallelCoordinatesContainer,
  MapContainer,
  WaveChanger,
  PartSelector
} from './components'

import dataW1 from './assets/dataW1.json'
import dataW2 from './assets/dataW2.json'
import dataW3 from './assets/dataW3.json'
import dataW4 from './assets/dataW4.json'
import dimensions from './assets/dimensions.json'
import continentToColourMap from './assets/continentToColourMap.json'

const dataSet = [dataW1, dataW2, dataW3, dataW4]

class PartOne extends Component {
  
  constructor(props) {
    super(props)

    this.state ={
      brushed: dataW1,
      selectedCountry: undefined,
      data: dataW1,
      wave: 0,
    }
  }

  handleWaveChange = (e) => {
    const wave = Number(e.target.value)
    const data = dataSet[wave]
    this.setState(state => ({
      wave,
      data,
      brushed: data,
      selectedCountry: undefined
    }))
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

    if(!isSelectedCountryUndefined || !areArraysEqual(e.data, this.state.brushed)) {
      console.log('state change', e.data)
      this.setState(state => ({
        brushed: e.data,
        selectedCountry: undefined,
      }))
    }
  }

  handleClick = (e) => {
    const clickedId = e.properties.ISO_A2.toLowerCase()
    const clickedData = this.state.brushed.find(({code}) => code === clickedId)
    if(clickedData !== undefined) {
      this.setState(state => ({
        selectedCountry: clickedData,
      }))
    }
  }

  render() {
    return (
      <div className="App">
        <PartSelector 
          onPartOneClick={this.props.onLinkClick(1)}
          onPartTwoClick={this.props.onLinkClick(2)}
        />
        <div className="TitleContainer">
          <h1 className="Title">
            Which countries are potential hotbeds for populism? (Pt. 1)
          </h1>
        </div>
        <WaveChanger 
          selected={this.state.wave}
          onChange={this.handleWaveChange}
        />
        <ParallelCoordinatesContainer
          data={this.state.data}
          dimensions={dimensions.wvs}
          highlightedItem={this.state.selectedCountry}
          onBrush={this.handleBrush}
          color={continentToColourMap}
        />
        <MapContainer
          dimensions={dimensions.wvs}
          selectable={this.state.brushed}
          selected={this.state.selectedCountry}
          onClick={this.handleClick}
          color={continentToColourMap}
        />
      </div>
    );
  }
}

export default PartOne