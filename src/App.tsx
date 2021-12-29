import React, { useState } from 'react';
import Header from './header/Header';
import HomePage from './homePage/HomePage';
import SideBar from './sideBar/SideBar';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-main h-screen font-lora">
      {isOpen ? (
        <Header handleClick={handleMenuClick} />
      ) : (
        <SideBar handleClick={handleMenuClick} />
      )}
      <HomePage />
    </div>
  );
}

export default App;
