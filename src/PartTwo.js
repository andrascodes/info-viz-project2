import React, { Component } from 'react'
import './PartTwo.css'

import { 
  MapContainer,
  WaveChanger,
  PartSelector,
  ScatterContainer
} from './components'

import dataW1 from './assets/dataW1.json'
import dataW2 from './assets/dataW2.json'
import dataW3 from './assets/dataW3.json'
import dataW4 from './assets/dataW4.json'
import dimensions from './assets/dimensions.json'
import continentToColourMap from './assets/continentToColourMap.json'

const dataSet = [dataW1, dataW2, dataW3, dataW4]

class PartTwo extends Component {
  
  constructor(props) {
    super(props)

    this.state ={
      brushed: dataW1,
      variableX: dimensions.gapMinder.income,
      variableY: dimensions.wvs.immigrants,
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

  handleVariableXChange = (event) => {
    event.persist()
    this.setState(state => ({
      variableX: dimensions.gapMinder[event.target.value]
    }))
  }
  
  handleVariableYChange = (event) => {
    event.persist()
    this.setState(state => ({
      variableY: dimensions.wvs[event.target.value]
    }))
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
          active={this.props.selectedScreen}
        />
        <div className="TitleContainer">
          <h1 className="Title">
            Examining the causes of populism
          </h1>
          <p className="subTitle">
            The analysis below combines data from the World Values Survey and Gapminder to search for correlation with macroeconomic values.
          </p>
        </div>
        <WaveChanger 
          selected={this.state.wave}
          onChange={this.handleWaveChange}
        />
        <ScatterContainer 
          data={this.state.data}
          dimensionsX={dimensions.gapMinder}
          dimensionsY={dimensions.wvs}
          onVariableXChange={this.handleVariableXChange}
          onVariableYChange={this.handleVariableYChange}
          variableX={this.state.variableX}
          variableY={this.state.variableY}
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

export default PartTwo