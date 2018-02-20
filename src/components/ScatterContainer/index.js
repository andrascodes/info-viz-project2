import React from 'react';

import './ScatterContainer.css'

import {
  ScatterChart, Scatter, 
  XAxis, YAxis, 
  CartesianGrid, 
  Tooltip, Legend
} from 'recharts'

import colorMap from '../../assets/continentToColourMap.json'

const ScatterContainer = (props) => {

  const europeans = props.data.filter(country => country.continent === 'Europe')
  const asians = props.data.filter(country => country.continent === 'Asia')
  const africans = props.data.filter(country => country.continent === 'Africa')
  const oceanics = props.data.filter(country => country.continent === 'Oceania')
  const northAmericans = props.data.filter(country => country.continent === 'North America')
  const southAmericans = props.data.filter(country => country.continent === 'South America')

  const renderToolTip = ({payload}) => {
    console.log(payload)
    if(payload.length > 0) {
      const x = payload[0]
      const y = payload[1]
      const country = x.payload.name
      return (
        <div className="scatterTip">
          <p className="scatterTipName">{country}</p>
          <p className="xValue">{x.name}: {x.value}{x.unit}</p>
          <p className="yValue">{y.name}: {y.value}{y.unit}</p>
        </div>
      )
    }
  }

  console.log(props)
  return (
    <div className="ScatterContainer">
      <div className="ScatterLeft">
        <select onChange={props.onVariableYChange}>
          {Object.values(props.dimensionsY).map((variable, index) => (
            <option 
              key={`varY${index}`}
              value={variable.variableName}
            >
              {variable.title}
            </option>
          ))}
        </select>
      </div>
      <div className="ScatterRight">
        <ScatterChart width={800} height={300} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          <XAxis 
            type="number" dataKey={props.variableX.variableName} 
            name={props.variableX.title} unit=''
          />
          <YAxis 
            type="number" dataKey={props.variableY.variableName} 
            name={props.variableY.title} unit='%'
          />
          <CartesianGrid />
          <Tooltip cursor={{strokeDasharray: '3 3'}} content={renderToolTip}/>
          <Legend/>
          <Scatter name='Europe' data={europeans} fill={colorMap['Europe'].full} r={2}/>
          <Scatter name='Asia' data={asians} fill={colorMap['Asia'].full} r={2}/>
          <Scatter name='Africa' data={africans} fill={colorMap['Africa'].full}/>
          <Scatter name='Oceania' data={oceanics} fill={colorMap['Oceania'].full}/>
          <Scatter name='North America' data={northAmericans} fill={colorMap['North America'].full}/>
          <Scatter name='South America' data={southAmericans} fill={colorMap['South America'].full}/>
        </ScatterChart>
        <select onChange={props.onVariableXChange}>
          {Object.values(props.dimensionsX).map((variable, index) => (
            <option 
              key={`varX${index}`}
              value={variable.variableName}
            >
              {variable.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
};

export default ScatterContainer