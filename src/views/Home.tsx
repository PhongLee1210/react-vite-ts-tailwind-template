// Import react | react-dom -> external lib -> component -> local (alphabet sort) -> @types
import React, { useState, useEffect } from 'react';

function Home() {
  // State
  const [state, setState] = useState<string>('initialState');

  // Effects
  useEffect(() => {
    // Code to run on component mount and unmount
    setState('newState');
    return () => {
      // Cleanup code
    };
  }, []);

  // Handlers

  // Render
  return <div>{state}</div>;
}

export default Home;
