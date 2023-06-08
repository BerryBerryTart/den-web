import React from 'react';
import './styles.css';
import CREDITS_LOGO from '../../assets/UI/den-credits.png';

export const Credits = () => {
  return (
    <div id="credits-container">
      <div id='credits-logo-container'>
        <img id="credits-logo" src={CREDITS_LOGO} alt="CREDITS LOGO" />
      </div>
      <div id='credits-names-container'>
        <div id="credits-left">
          <h1 className='credits-title'>ARTISTS</h1>
          <div id='artist-list'>
            <p>427Deer</p>
            <p>Anaugi</p>
            <p>AtomicRaccoon</p>
            <p>Bakertoons</p>
            <p>BerryBerryBerry</p>
            <p>Byuni</p>
            <p>ConiRaccoon</p>
            <p>DanSyron</p>
            <p>Doodlebot</p>
            <p>Dulce Ratoncita</p>
            <p>Ethan8bit</p>
            <p>Fay</p>
            <p>FiddleHifi</p>
            <p>Fraughstil</p>
            <p>Goldidraws</p>
            <p>JesseMG</p>
            <p>KRS1302</p>
            <p>Kerberos</p>
            <p>Kyuuoku</p>
            <p>Monbai</p>
            <p>MonkeBoi</p>
            <p>MordacaiMT</p>
            <p>PXL_BRD</p>
            <p>PajamaHam</p>
            <p>Pocketiel</p>
            <p>Promp</p>
            <p>Richiefizzle</p>
            <p>Ruribec</p>
            <p>Smoothsharb</p>
            <p>Sonichu</p>
            <p>Sonokido</p>
            <p>Souvillaine</p>
            <p>Starvenus</p>
            <p>Tachiweasel</p>
            <p>VPVRTMENT</p>
            <p>VirusHunter</p>
            <p>Waffledog</p>
            <p>Zinoc</p>
          </div>
        </div>
        <div id="credits-right">
          <h1 className='credits-title'>DEVELOPMENT</h1>
          <p>BerryBerryBerry</p>
          <p>BBud</p>
          <p>Monbai</p>
          <p>Sonokido</p>
          <p>EpochBeanz</p>
          <p>Solid Chunk</p>
          <h1 className='credits-title'>MUSIC</h1>
          <p>biddyfox</p>
          <h1 className='credits-title'>SOUNDS</h1>
          <p>Gundam Battle Assault 2</p>
          <p>Street Fighter II</p>
        </div>
      </div>
    </div>
  );
}