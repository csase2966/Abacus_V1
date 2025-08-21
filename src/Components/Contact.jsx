// src/components/Contact.jsx
import { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    const form = document.querySelector('.contact-form form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
      });
    }
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Ready to begin your child's transformative learning journey? Contact us today for more information or to schedule a free trial class.</p>
            <ul className="contact-details">
              <li><strong>Address:</strong> Bachupally, Mallampet Road, Hyderabad - 500090</li>
{/*               <li><strong>Phone:</strong> +91-XXXX-XXXXXX</li> */}
              <li><strong>Email:</strong> sn.brightfuture@gmail.com</li>
              
            </ul>
            <div style={{ marginTop: '2rem' }}>
{/*               <a href="#trial" className="btn btn-primary">Book Free Trial Class</a> */}
              {/* <a href="#franchise" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>Apply for Franchise</a> */}
            </div>
          </div>

          {/* <div className="contact-form">
            <h3>Send us a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="course">Course Interest</label>
                <select id="course" style={{ width: '100%', padding: '0.75rem', border: 'none', borderRadius: '5px', background: 'rgba(255,255,255,0.9)', color: '#333' }}>
                  <option>Abacus Arithmetic</option>
                  <option>Vedic Mathematics</option>
                  <option>Bhagavad Gita Lessons</option>
                  <option>Yoga & Meditation</option>
                  <option>I-Sense Development</option>
                  <option>All Courses</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell us about your child's age and learning goals..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
