import React, { useEffect, useState } from 'react';
import './App.css';
import { SplashScreen } from './components/SplashScreen';
import { CharacterSelect } from './components/CharacterSelect';
import { Credits } from './components/Credits';

import VOL_ON from './assets/UI/vol-on.svg';
import VOL_OFF from './assets/UI/vol-off.svg';
import CREDIT_ICON from './assets/UI/credits.svg';
import BACK from './assets/UI/back.svg';

import GAME_THEME from './assets/SOUNDS/game-theme.mp3';
import SELECT_SFX from './assets/SOUNDS/start-menu-select.wav';
const gameTheme = new Audio(GAME_THEME);
const selectSFX = new Audio(SELECT_SFX);

function App() {
  const [showCharacterSelect, setShowCharacterSelect] = useState(false);
  const [showCredits, setShowCredits] = useState(false);
  const [useSound, setUseSound] = useState(false);
  const [showBack, setShowBack] = useState(false);

  const startSelected = () => {
    setShowCharacterSelect(true);
    selectSFX.play();
  }

  const toggleSound = () => {
    setUseSound(!useSound);
  };

  useEffect(() => {
    useSound ? gameTheme.play() : gameTheme.pause()
  }, [useSound])

  const toggleCredits = () => {
    setShowCredits(!showCredits);
  };

  const handleBack = () => {
    setShowCharacterSelect(false);
  }

  useEffect(() => {
    let val = false;
    if (showCredits) {
      val = false;
    } else if (showCharacterSelect) {
      val = true;
    }
    setShowBack( val );
  }, [showCharacterSelect, showCredits])

  return (
    <>
      <div id="controls-container">
        <img onClick={toggleSound} src={useSound ? VOL_ON : VOL_OFF} alt="sound" />
        <img onClick={toggleCredits} src={CREDIT_ICON} alt="credits" />
        {showBack && <img onClick={handleBack} src={BACK} alt="credits" />}
      </div>
      <Credits shouldShow={showCredits}/>
      {!showCharacterSelect && <SplashScreen startSelectFunc={startSelected} />}
      {showCharacterSelect && <CharacterSelect sound={useSound} />}
    </>
  )
}

export default App;
