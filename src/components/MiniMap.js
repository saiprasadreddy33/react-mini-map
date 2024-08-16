import React from 'react';
import mapImage from './assets/map.png';
const MiniMap = ({ position }) => {
  const mapSize = 2048;
  const miniMapSize = 400;
  const scale = miniMapSize / mapSize;

  const miniMapStyle = {
    width: `20rem`,
    height: `20rem`,
    backgroundImage: `url(${mapImage})`,
    backgroundSize: `${mapSize * scale}px ${mapSize * scale}px`,
    backgroundPosition: `-${position.x * scale}px -${position.y * scale}px`,
    borderRadius: '50%',
    border: '2px solid white',
    position: 'sticky',
    top: '20px',
    right: '2px',
    overflow: 'hidden',
    clipPath: 'circle(50%)',
  };

  return (
    <div className="mini-map" style={miniMapStyle}>
      <div
        className="absolute bg-red-500 rounded-full"
        style={{
          width: '10px',
          height: '10px',
          left: `${miniMapSize / 2 - 5}px`,
          top: `${miniMapSize / 2 - 5}px`,
        }}
      ></div>
    </div>
  );
};

export default MiniMap;
