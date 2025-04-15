import React from 'react';
import '../styles/Aboutme.scss';

function Aboutme() {
  return (
    <div className="aboutme-container">
      <section className="description">
        <h1>About Me</h1>
        <div className="divider" />
        <p>
          As an engineer, I bring experience in managing and administering resources, as well as executing projects. In addition to my academic background, I have also participated in robotics courses and tournaments to expand my knowledge and skills. My expertise includes developing projects and restoring medical equipment, which has helped me sharpen my problem-solving abilities and attention to detail.        </p>
      </section>

      <section className="what-im-doing">
        <h2>What I'm Doing</h2>
        <div className="cards-grid">
          <div className="service-card">
            <span className="icon">👨‍🎓</span>
            <h3>FullStack On the way</h3>
            <p>
              I'm currently enrolled in the Full Stack Developer bootcamp at Dev.f, where I'm learning to build complete web
              applications from scratch. The program covers modern technologies such as JavaScript, React, Node.js, MongoDB,
              and SQL. This hands-on experience is helping me strengthen both my frontend and backend development skills.
            </p>
          </div>
          <div className="service-card">
            <span className="icon">🧵</span>
            <h3>Custom Merch & Branding</h3>
            <p>
              I run a creative startup that specializes in custom printing and embroidery on t-shirts, hats, and promotional items.
              We also work with ceramics and handcrafted wood pieces, offering personalized products for businesses, events, and
              individuals. Our goal is to bring your ideas to life through quality materials and detailed craftsmanship.
            </p>
          </div>
          <div className="service-card">
            <span className="icon">⚙️</span>
            <h3>Embedded Systems Enthusiast</h3>
            <p>
              Passionate about low-level development and hardware integration, I enjoy building smart systems that interact with
              the physical world. From microcontrollers to sensors and communication protocols, I love exploring how software
              can bring electronics to life. Constantly learning and prototyping new ideas with platforms like <b>Arduino, STM32, Arm Cortex-M0+, Esp32, Raspberry Pi</b>.
            </p>
          </div>
          <div className="service-card">
            <span className="icon">🔧</span>
            <h3>Restore Engineer</h3>
            <p>
              Dedicated to giving a second life to electronic devices, machinery, and handcrafted items. With a keen eye for detail and problem-solving, I restore and repurpose broken or outdated tech, blending engineering skills with sustainability and creativity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutme;
