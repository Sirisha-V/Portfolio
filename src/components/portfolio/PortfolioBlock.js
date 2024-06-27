import React, { useState } from 'react';
import { Box } from "@mui/material";
import './PortfolioBlock.css';

function PortfolioBlock(props) {
  const { image, description, technologies, title } = props;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <div className="scene" onClick={handleClick}>
        <div className={`cube ${isFlipped ? 'flipped' : ''}`}>
          <div className="cube-face cube-front">
            <Box component="img" src={image} alt="Project" className="fancy-image" />
            <h2 className="fancy-title">{title}</h2>
          </div>
          <div className="cube-face cube-back">
            <Box className="portfolio" display="flex" flexDirection="column" gap="1rem" alignItems="center" py="2rem">
              <Box className="description-box">
                <p>{description}</p>
              </Box>
              <Box className="technologies-box">
                <p>{technologies}</p>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default PortfolioBlock;
