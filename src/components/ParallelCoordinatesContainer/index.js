import React, { Component } from 'react'

import d3 from 'd3'

import './ParallelCoordinatesContainer.css'

import { ParallelCoordinates } from 'react-parcoords'
import '../../../node_modules/react-parcoords/d3.parcoords.css'

class ParallelCoordinatesContainer extends Component {

  componentDidMount() {
    
    // TODO: On Label Hover show Tooltip
    d3.selectAll('.label')
    .on('mouseover', (e) => {
      // console.log('label mouseover', e)
    })
    .on('mouseout', (e) => {
      // console.log('label mouseout', e)
    })

    // TODO: On Brush Hover bold the axis
    d3.selectAll('.brush')
    .on('mouseover', (e) => {
      // e.preventDefault()
      // console.log('axis mouseover', e)
    })
    .on('mouseout', (e) => {
      // e.preventDefault()
      // console.log('axis mouseout', e)
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextUpdate', nextProps, nextState, this.props)
    if(this.props.highlightedItem !== nextProps.highlightedItem) {
      return true
    }
    else if(this.props.data.length !== nextProps.data.length) {
      return true
    }
    return false
  }

  getColorForData = (data) => {
    if(data[0] !== undefined) {
      return this.props.color[data[0].continent].full
    }
    else {
      return this.props.color[data.continent].full
    }
  }

  render() {

    this.props.dimensions.happiness.scale = d3.scale.linear().range([0, 100])

    return (
      <div className="ParallelCoordinatesContainer">
        <ParallelCoordinates
          color={ this.getColorForData }
          width={1250}
          height={250}
          dimensions={this.props.dimensions}
          data={this.props.data}
          highlights={this.props.highlightedItem ? [this.props.highlightedItem] : []}
          onBrush={this.props.onBrush}
          onBrushEnd={this.props.onBrushEnd}
        />
      </div>
    );
  }
}

export default ParallelCoordinatesContainer;