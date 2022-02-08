import React, { useState } from 'react';
import Header from './header/Header';
import HomePage from './homePage/HomePage';
import SideBar from './sideBar/SideBar';
import Footer from './footer/Footer';

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleMenuClick = (): void => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className="bg-main h-screen font-lora">
      {isSideBarOpen ? (
        <SideBar handleClick={handleMenuClick} />
      ) : (
        <Header handleClick={handleMenuClick} />
      )}
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
