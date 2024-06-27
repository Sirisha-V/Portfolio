import React from 'react';
import PortfolioBlock from './PortfolioBlock';

function App() {
  return (
    <div>
      <PortfolioBlock
        image="path_to_your_image.jpg"
        title="Project Title"
        description="Description of the project."
        technologies="Tech1, Tech2, Tech3"
      />
    </div>
  );
}

export default App;
