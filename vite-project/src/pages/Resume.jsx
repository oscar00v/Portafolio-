import React from 'react';
import '../styles/Resume.scss';

function Resume() {
  return (
    <div className="resume-container">
      <section className="header">
        <h1>Resume</h1>
        <div className="divider" />
      </section>
      {/* Experiencia */}
      <section className="resume-section">
        <div className="section-icon">💼</div>
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Recuerdos business StartUp </h3>
            <span className="date">1/2023 - Present</span>
            <h4>Founder and Manager of my e-commerce-centric design and advertising enterprise</h4>
            <p>
              Managed the production division, ensuring high quality and efficiency in the manufacturing of marketed products.</p>
            <p>Developed and implemented effective advertising strategies across diverse digital marketing platforms, increasing audience reach by 95% according to Meta metrics.</p>
            <p>Personally involved in the design creation, editing, and production processes to maintain consistent visual aesthetics and product excellence.</p>

          </div>
          <div className="timeline-item">
            <h3>Cirlap Cirugía Laparoscópica</h3>
            <span className="date">04/2020 - 11/2022</span>
            <h4>Head of the engineering department</h4>
            
            <p>Effectively managed department resources, optimizing project completion with improved efficiency.</p>
            <p>Planned and executed projects, consistently delivering on time and meeting high standards.</p>
            <p>Organized and delegated tasks, increasing team productivity by 30% through effective task management.</p>
            <p>Repaired and restored medical equipment, reducing repair times by 50% and minimizing the need for frequent revisions, ensuring optimal performance.</p>
            <p>Trained and mentored employees and customers, enhancing their technical skills and knowledge.</p>
            <p>Diagnosed hardware, debugged systems, and developed prototypes, enhancing the overall quality and functionality of equipment.
            </p>
          </div>
          <div className="timeline-item">
            <h3>Benchmark Electronics</h3>
            <span className="date">11/2019 - 03/2020</span>
            <h4>Industrial Engineer department.</h4>
            <p>
              Conducted time studies to measure production line efficiency and identify opportunities for improvement, resulting in increased production output and cost savings.</p>
              <p>Lead multiple process improvement projects, utilizing Lean Six Sigma methodologies to reduce waste, increase efficiency, and improve overall quality.</p>
              <p> Developed and implemented standard work procedures to ensure consistency and efficiency across production lines.
            </p>
          </div>
          <div className="timeline-item">
            <h3>Jett Acces</h3>
            <span className="date">01/2018 - 05/2018</span>
            <h4>Electronics department, Intern</h4>
            <p>
              Designed and developed electric prototypes, including schematic design, PCB layout, and assembly.</p>
              <p>Tested and troubleshot prototypes, ensuring they met quality and performance standards.</p>
              <p>Collaborated with cross-functional teams, integrating projects with software and mechanical engineering.</p>
              <p> Performed firmware and software tests, ensuring prototype compatibility and functionality.</p>
              <p>Documented test results and provided improvement recommendations.</p>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
