import React from 'react';

const AnalyticTrailTwo = () => {
  return (
    <div className="TrailContainer">
      <h2 className="Insights">Insights</h2>
      <div className="insightList">
        <p>
          Our very first hypothesis could be to examine the correlation between the GDP 
          of a country and whether they favour strong leaders as opposed to debate. 
          For countries with high GDP there’s a clear correlation, however for less 
          developed countries there are many examples for favouring a democratic system too.
        </p>
        <p>
          A slight positive correlation can be observed between the population growth 
          of a country and people being proud of their nationality. 
          As the population of a country shrinks, so does the number of its patriots.
        </p>
        <p>
          A possible assumption that we could have is whether the willingness to fight for 
          one’s country correlates with a higher percentage of young (20-39) male population. 
          Analyzing this, it was not possible to confidently prove or disprove this hypothesis.
        </p>
        <p>
          Another hypothesis could be that the tolerance toward immigrants correlates 
          positively with the amount of internet users in a country, as a country’s inner 
          culture can be influenced by the outside world. Looking at the data there’s some truth 
          to this in the late 90s/early 2000s. However, after the Internet has spread to most 
          countries (2005-2014) there’s no conclusion that could be made about our initial hypothesis.
        </p>
      </div>
    </div>
  );
};

export default AnalyticTrailTwo;