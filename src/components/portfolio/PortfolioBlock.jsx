import React from 'react';
import PortfolioBlock from './PortfolioBlock';
import Achievements from './Achievements';
import Carousel from './Carousel';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#fafafa' }}>
      <Carousel />
    </div>
  );
}


function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#fafafa' }}>
      <PortfolioBlock
        image="https://via.placeholder.com/300x200.png?text=Project+Image"
        title="Project Title"
        description="This is a brief description of the project. It covers the main objectives and the outcomes."
        technologies="React, CSS, JavaScript"
      />
    </div>
  );
}

export default App;
