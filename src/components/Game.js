import React, { useState, useEffect } from 'react';
import MiniMap from './MiniMap';
import mapImage from './assets/map.png';

const Game = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const mapSize = 2048;

  const handleKeyDown = (e) => {
    setPosition((prevPosition) => {
      let newX = prevPosition.x;
      let newY = prevPosition.y;

      switch (e.key) {
        case 'ArrowUp':
          newY = Math.max(prevPosition.y - 10, 0);
          break;
        case 'ArrowDown':
          newY = Math.min(prevPosition.y + 10, mapSize - 1293);
          break;
        case 'ArrowLeft':
          newX = Math.max(prevPosition.x - 10, 0);
          break;
        case 'ArrowRight':
          newX = Math.min(prevPosition.x + 10, mapSize - 750);
          break;
        default:
          break;
      }

      return { x: newX, y: newY };
    });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-800">
      <div
        className="relative w-100 h-100"
        style={{
          backgroundImage: `url(${mapImage})`,
          width: '83rem',
          height: '50rem',
          overflow: 'hidden',
        }}
      >
        <div
          className="absolute bg-blue-500 rounded-full"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: '20px',
            height: '20px',
          }}
        ></div>
      </div>
      <MiniMap position={position} />
    </div>
  );
};

export default Game;
