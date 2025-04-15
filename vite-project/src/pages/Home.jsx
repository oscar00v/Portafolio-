import React from 'react';
import '../styles/Home.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
    return (
        <section className='profile'>
            <div className='profile-card'>

                <div className='avatar'>
                    <img src='/avatar.png' alt='' />
                </div>

                <h1 className='name'>Oscar Orozco</h1>
                <p className='degree'>Mechatronic Engineer</p>
                <p className='degree'>Master of Computer Science</p>

                <div className='divider'></div>

                <ul className='contact-list'>

                    <li className='contact-item'>
                        <i className="bi bi-envelope-fill"></i>
                        <div>
                            <p className='contact-title'>Email</p>
                            <a href="mailto:Oscar00v@gmail.com" className='contact-link'>Oscar00v@gmail.com</a>
                        </div>
                    </li>

                    <li className='contact-item'>
                        <i className="bi bi-telephone-fill"></i>
                        <div>
                            <p className='contact-title'>Phone</p>
                            <a href="tel:+5213314677993" className='contact-link'>+52 1 331 467 7993</a>
                        </div>
                    </li>

                    <li className='contact-item'>
                        <i className="bi bi-linkedin"></i>
                        <div>
                            <p className='contact-title'>LinkedIn</p>
                            <a href="https://www.linkedin.com/in/00v/" className='contact-link'>
                                linkedin.com/in/00v
                            </a>
                        </div>
                    </li>

                    <li className='contact-item'>
                        <i className="bi bi-geo-alt-fill"></i>
                        <div>
                            <p className='contact-title'>Location</p>
                            <address>Guadalajara, Jalisco, Mexico</address>
                        </div>
                    </li>
                </ul>

                <ul className='social-list'>
                    <li>
                        <a href="https://github.com/oscar00v">
                            <i className="bi bi-github"></i>
                        </a>
                    </li>
                    
                    
                </ul>

            </div>
        </section>
    );
}

export default Home;
