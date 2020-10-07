import React from 'react';
import aboutimg from '../../assets/images/elevento.png';
import bola from '../../assets/images/bola.png';
import triangulo from '../../assets/images/triangulo.png';
import quadrado from '../../assets/images/quadrado.png';

import './styles.scss';
function About() {
  return (
    <div className="aboutes">
      <div className="aboutes__container">
        <img className="aboutes-img" src={aboutimg} alt="o evento" />
        <div className="aboutes__left">
          <p>
            La <b>Semana ONErpm</b> es un evento online de 3 días llenos de conferencias, pláticas,
            showcases y master classes presentadas por el equipo de <b>ONErpm</b>, aliados
            comerciales, artistas, y expertos en la industria de la música y el entretenimiento.
          </p>
          <p>
            Aprende de una <b>variedad de temas</b>: negocios de la música, management,
            distribución, booking, becas, y ecosistema musical,{' '}
            <b>de la mano de expertos de la industria musical.</b>
          </p>
          <p>
            ¿Lo mejor de todo? La Semana ONErpm es <b>completamente gratis</b> y podrás asistir desde la
            comodidad de tu casa o estudio.
          </p>
        </div>
        <div className="aboutes__right">
          <div className="aboutes__fase">
            <img src={bola} alt="Círculo laranja" />
            <div>
              <h4>Panel</h4>
            </div>
          </div>
          <div className="aboutes__fase">
            <img src={triangulo} alt="Triângulo rosa" />
            <div>
              <h4>Charla /Taller</h4>
            </div>
          </div>
          <div className="aboutes__fase">
            <img src={quadrado} alt="quadrado azul" />
            <div>
              <h4>Showcase</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
