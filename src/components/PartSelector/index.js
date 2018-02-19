import React from 'react';

import './PartSelector.css'

const PartSelector = (props) => {
  return (
    <div className="PartSelector">
      <a onClick={props.onPartOneClick}>Part 1</a>
      <a onClick={props.onPartTwoClick}>Part 2</a>
    </div>
  );
};

export default PartSelector;