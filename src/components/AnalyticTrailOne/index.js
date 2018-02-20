import React from 'react';

import './AnalyticTrailOne.css'

const AnalyticTrailOne = () => {
  return (
    <div className="TrailContainer">
      <h2 className="Insights">Insights</h2>
      <div className="insightList">
        <ul>
          <li>Countries being the least tolerant with immigrants/foreign workers are all from the Asian or African continent.</li>
          <li>Latin countries such as Spain, Chile, Colombia, Peru, Venezuela and Argentina are the least interested in politics. One notable exception is Morocco.</li>
          <li>The former Soviet Union states and Brazil are mostly in favour of a strong leader not bothering with parliament and elections.</li>
          <li>Over the examined period, a democratic system was considered a good idea by an increasing number of people. After 2000 the majority of the answerers preferred democracy.</li>
          <li>The lowest figures for being proud of one’s nationality belongs to mostly Eastern European countries. The nationalistic feelings do not correlate with a willingness to fight for one’s country.</li>
          <li>In most countries, more than half of the people answering have lost confidence in political parties. The only outlier is China, where most people trust the “parties”.</li>
          <li>Over the years between 1995-2014 less and less percentage of the entire population answered with being unhappy.</li>
        </ul>
      </div>
    </div>
  );
};

export default AnalyticTrailOne;