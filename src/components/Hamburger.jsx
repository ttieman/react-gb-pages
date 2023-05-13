import React, { useState } from 'react';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    <button 
      className="lg:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <svg 
          className="fill-current h-3 w-3" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
        </svg>
      ) : (
        <svg 
          className="fill-current h-3 w-3" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      )}
    </button>

    {isOpen && (
      <div className="block lg:hidden">
        <a href="#home" className="text-white">Home</a>
        <a href="#about" className="text-white">About</a>
        <a href="#contact" className="text-white">Contact</a>
      </div>
    )}

    <div className="hidden lg:block">
      <a href="#home" className="text-white">Home</a>
      <a href="#about" className="text-white">About</a>
      <a href="#contact" className="text-white">Contact</a>
    </div>
  </div>
  );
};

export default Hamburger;