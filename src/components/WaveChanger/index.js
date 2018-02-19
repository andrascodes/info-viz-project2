import React from 'react'

import './WaveChanger.css'

const WaveChanger = (props) => {
  return (
    <div className="WaveChangerContainer">
      <div className="WaveChanger">
        <input type="radio" id="wave1" value="0" name="waveChanger" 
          onChange={props.onChange}
          checked={props.selected === 0}
        />
        <label htmlFor="wave1">1995-1998</label>
        
        <input type="radio" id="wave2" value="1" name="waveChanger" 
          onChange={props.onChange}
          checked={props.selected === 1}
        />
        <label htmlFor="wave2">1999-2004</label>
        
        <input type="radio" id="wave3" value="2" name="waveChanger" 
          onChange={props.onChange}
          checked={props.selected === 2}
        />
        <label htmlFor="wave3">2005-2009</label>
        
        <input type="radio" id="wave4" value="3" name="waveChanger" 
          onChange={props.onChange}
          checked={props.selected === 3}
        />
        <label htmlFor="wave4">2010-2014</label>
      </div>
    </div>
  )
}

export default WaveChanger