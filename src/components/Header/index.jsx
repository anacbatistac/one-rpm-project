import React from 'react';
import './styles.scss';

import Countdown from '../Countdown';
import logoBR from '../../assets/images/logo_br.png';
import data from '../../assets/images/data.png';
import formas from '../../assets/images/formas.png';

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <img className="bg" src={formas} alt="formas" />
        <img className="logo" src={logoBR} alt="ONErpm Academy" />
        <img className="data" src={data} alt="27 e 28 de outubro" />
        <a
          style={{ marginTop: '6em' }}
          href="https://www.youtube.com/watch?v=J-SL8zVaBtE"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Entre e acompanhe o Evento ao vivo
        </a>
        {/* <Countdown /> */}
      </div>
    </div>
  );
}

export default Header;
