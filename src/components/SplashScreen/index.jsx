import React from 'react';
import './styles.css';
import splashLogo from '../../assets/UI/splash-logo.png';

export const SplashScreen = ({ startSelectFunc }) => {
  return (
    <>
      <div className="splash-screen">
        <span className='splash-logo-container'>
          <img id='splash-logo' src={splashLogo} />
        </span>
        <p onClick={startSelectFunc} id='start-menu'>PRESS START</p>
      </div>
      <div className="repeating-bg"></div>
      <div className="static-bg"></div>
    </>
  )
}
