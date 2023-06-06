import React, { useState } from 'react';
import './App.css';
import { SplashScreen } from './components/SplashScreen';
import { CharacterSelect } from './components/CharacterSelect';

function App() {
  const [showCharacterSelect, setShowCharacterSelect] = useState(false);

  const startSelected = () => {
    setShowCharacterSelect(true);
  }

  return (
    <>
      { !showCharacterSelect && <SplashScreen startSelectFunc={startSelected}/> }
      { showCharacterSelect && <CharacterSelect /> }
    </>
  )
}

export default App;
