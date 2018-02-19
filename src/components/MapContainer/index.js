import React, { Component } from 'react';

import './MapContainer.css'
import './emoji.css'

import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from 'react-simple-maps'

import tooltip from 'wsdm-tooltip'

class MapContainer extends Component {

  componentDidMount() {
    this.tip = tooltip()
    this.tip.create()
  }

  handleMouseMove = (geography, evt) => {
    const id = geography.properties.ISO_A2.toLowerCase()
    const name = geography.properties.NAME
    const selectableCountry = this.props.selectable.find(country => country.code === id)

    const renderStatistics = (selectableCountry) => {
      if(selectableCountry === undefined) {
        return ''
      }
      return (
        `<table class="tooltipTable">
          <tr>
            <td>${this.props.dimensions.immigrants.title}</td>
            <td>${Math.floor(selectableCountry.immigrants)}%</td>
          </tr>
          <tr>
            <td>${this.props.dimensions.politics.title}</td>
            <td>${Math.floor(selectableCountry.politics)}%</td>
          </tr>
          <tr>
            <td>${this.props.dimensions.strongLeader.title}</td>
            <td>${Math.floor(selectableCountry.strongLeader)}%</td>
          </tr>
          <tr>
            <td>${this.props.dimensions.democracy.title}</td>
            <td>${Math.floor(selectableCountry.democracy)}%</td>
          </tr>
          <tr>
            <td>${this.props.dimensions.nationalism.title}</td>
            <td>${Math.floor(selectableCountry.nationalism)}%</td>
          </tr>
          <tr>
            <td>${this.props.dimensions.politicalParties.title}</td>
            <td>${Math.floor(selectableCountry.politicalParties)}%</td>
          </tr>
          <tr>
            <td>${this.props.dimensions.fightForCountry.title}</td>
            <td>${Math.floor(selectableCountry.fightForCountry)}%</td>
          </tr>
          <tr>
            <td>${this.props.dimensions.happiness.title}</td>
            <td>${Math.floor(selectableCountry.happiness)}%</td>
          </tr>
        </table> 
        `
      )
    }

    this.tip.show(`
      <div class="tooltip-inner">
       <p class="tooltipName"><i class="em em-flag-${id}"></i>${name}</p>
        ${renderStatistics(selectableCountry)}
      </div>
    `)
    this.tip.position({ pageX: evt.pageX, pageY: evt.pageY })
  }

  handleMouseLeave = () => {
    this.tip.hide()
  }

  render() {

    return (
      <div className="MapContainer">
        <div className="MapContent">
          <ComposableMap
            projectionConfig={{
              scale: 150,
              rotation: [-11,0,0],
            }}
            width={800}
            height={400}
            style={{
              height: "auto",
            }}
          >
            <ZoomableGroup center={[0,20]} disablePanning>
              <Geographies geography="world-110m.json" disableOptimization>
                {(geographies, projection) => geographies.map((geography, i) => {
                  const id = geography.properties.ISO_A2.toLowerCase()
                  const continent = geography.properties.CONTINENT
                  let color = this.props.color[continent]
                  if(color === undefined) {
                    color = {
                      faded: '#000000',
                      full: '#000000'
                    }
                  }
                  const style = {
                    default: {
                      fill: color.faded,
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: color.faded,
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    pressed: {
                      fill: color.faded,
                      stroke: "#000000",
                      strokeWidth: 1,
                      outline: "none",
                    },
                  }
                  if(this.props.selectable.some(({ code }) => code === id)) {
                    style.default.fill = color.half
                    style.hover.fill = color.full
                    style.pressed.fill = color.full
                  }
                  if(this.props.selected && this.props.selected.code === id) {
                    style.default.fill = color.full
                    style.default.stroke = `#000000`
                    style.default.strokeWidth = 1.0
                    style.hover.fill = color.full
                    style.hover.stroke = `#000000`
                    style.hover.strokeWidth = 1.0
                    style.pressed.fill = color.full
                    style.pressed.stroke = `#000000`
                    style.pressed.strokeWidth = 1.0
                  }
                  
                  if(id !== 'AQ') {
                    return <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      onClick={this.props.onClick}
                      onMouseMove={this.handleMouseMove}
                      onMouseLeave={this.handleMouseLeave}
                      style={style}
                    />
                  }
                })}
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    )
  }
}

export default MapContainer