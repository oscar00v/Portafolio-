import React from 'react'
import '../styles/Contact.scss';


function Contact() {
  return (
    <div className='contact-container'>
      <header>
      <h2 className='Section-title'>Contact</h2>
      <div className='divider' />

      </header>      
      {/* Google maps */}
      <section className='mapbox'>
      <iframe
          title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.123456789!2d-103.349609!3d20.659698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b18c1f1f1f1f%3A0x123456789abcdef!2sGuadalajara%2C%20Jalisco%2C%20Mexico!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
          width="100%"
          height="300"
          loading="lazy"
          allowFullScreen=""
        />
      </section>
     {/* Contact Form */}
     <section className="contact-form-section">
        <h3 className="form-title">Contact Form</h3>

        <form className="contact-form">
          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder="Full name" required />
            <input type="email" name="email" className="form-input" placeholder="Email address" required />
          </div>
          <textarea name="message" className="form-input" placeholder="Your Message" required />

          <button className="form-btn" type="submit">
            <span>Send Message</span>
          </button>
        </form>
      </section>
    
    </div>
  )
}

export default Contact
