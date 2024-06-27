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
          <div className="cube-face cube-front" style={{ background: '#f0f0f0', color: '#333' }}>
            <Box component="img" src={image} alt="mockup" />
            <h2 style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 'bold', color: '#2c3e50', textTransform: 'uppercase', textAlign: 'center', marginTop: '0.0rem' }}>{title}</h2>
          </div>
          <div className="cube-face cube-back" style={{ background: '#f8f8f8', color: '#555' }}>
            <Box className="portfolio" display="flex" flexDirection="column" gap="0.5rem" alignItems="center" fontSize="1.2rem" py="2rem">
              <Box p={1} border="0px solid #ccc" borderRadius="25px">
                <p style={{ fontFamily: 'Roboto', fontSize: '0.9rem', textAlign: 'center', color: '#333', lineHeight: '1.4' }}>{description}</p>
              </Box>
              <Box p={1} border="2px solid #ccc" borderRadius="25px">
                <p style={{ fontFamily: 'Poppins', fontSize: '0.9rem', textAlign: 'center', color: '#555', lineHeight: '1.4' }}>{technologies}</p>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default PortfolioBlock;
