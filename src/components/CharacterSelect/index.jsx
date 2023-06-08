import React, { useEffect, useState } from "react";
import { CHARACTER_MANIFEST } from './characterManifest';
import './styles.css';
import CHAR_SELECT_SOUND from '../../assets/SOUNDS/char-select.wav';

const charSelectSound = new Audio(CHAR_SELECT_SOUND);

export const CharacterSelect = ({ sound }) => {
  const [leftChar, setLeftChar] = useState(undefined);
  const [rightChar, setRightChar] = useState(undefined);
  const [useLeft, setUseLeft] = useState(true);

  useEffect(() => {
    if (CHARACTER_MANIFEST) {
      setLeftChar(CHARACTER_MANIFEST[Math.floor(Math.random() * CHARACTER_MANIFEST.length)]);
      setRightChar(CHARACTER_MANIFEST[Math.floor(Math.random() * CHARACTER_MANIFEST.length)]);
    }
  }, [CHARACTER_MANIFEST])

  const onThisCharacterSelect = (char) => {
    if (useLeft) {
      setLeftChar(char);
      setUseLeft(!useLeft);
    } else {
      setRightChar(char);
      setUseLeft(!useLeft);
    }
    if (sound) {
      charSelectSound.play();
    }
  }

  //JUST to hash names to refresh animation :3c
  const quickHash = (str) => {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
      let chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }

  const renderCharacter = (flipped, char) => {
    if (!char) {
      return (
        <div>SELECT SOMEONE!</div>
      );
    }
    let imageClassNames = "character-profile-image ";
    imageClassNames += flipped ? "flipped" : "unflipped";
    let bgClasses = "profile-repeat-bg ";
    bgClasses += flipped ? "left-repeat" : "right-repeat";
    return (
      <>
        <div className="portrait-container">
          <img
            key={quickHash(char.charName)}
            className={imageClassNames}
            src={flipped ? char.alt : char.main}
          />
        </div>
        <div className="background-container">
          <div
            className="character-profile-bg"
            style={{ backgroundColor: char.bg }}>
          </div>
          <div
            style={{ filter: char.bg_alt }}
            className={bgClasses}
          ></div>
        </div>
      </>
    )
  }

  const getCharacterProfiles = () => {
    let arr = []
    CHARACTER_MANIFEST.forEach((element, index) => {
      arr.push(
        <img
          className="menu-thumb"
          onClick={() => onThisCharacterSelect(element)}
          key={index}
          src={element.thumb}
          style={{
            backgroundColor: element.bg,
            border: `6px solid ${element.border}`
          }}
        />
      )
    });
    return arr;
  }

  return (
    <>
      <div id="versus">VS</div>
      <div className="name-container">
        {leftChar && <div id="left-name">{leftChar.charName}</div>}
        {rightChar && <div id="right-name">{rightChar.charName}</div>}
      </div>
      <div id="character-menu">
        <div id="character-icon-container">
          {getCharacterProfiles()}
        </div>
        <div id="character-select-title">CHOOSE YOUR FIGHTER</div>
      </div>
      <div id='character-select-container'>
        <div id="character-left">{renderCharacter(false, leftChar)}</div>
        <div id="character-right">{renderCharacter(true, rightChar)}</div>
      </div>
      <div id="select-gradient"></div>
    </>
  );
}
