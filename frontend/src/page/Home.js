import React from 'react';
// import { useNavigate } from 'react-router-dom';
import SideBar from '../component/navbar/navbar';
import '../styles/home.css';
import ParticleEffect from '../component/background/particel_effect_1';

function Home() {
  return (
    <div className="wrapper">
      <SideBar />
      <div className="main-body">
        <section className="box">
          <h2>Hello! I'm a software developer with a knack for innovative design</h2>
          <p>You can call me Leafy. I like to convert thoughts into reality. I’m always up for a tech adventure and figuring out how to make things work in unique ways.</p>
          <button id="button" onClick={() => alert('Button Clicked')}>
            Let's Talk
          </button>
        </section>
        <div className="canvas-container">
          <ParticleEffect />
        </div>
      </div>
    </div>
  );
}

export default Home;
